import { decryptJWT, type JWT } from "$lib/utils/encryption";
import type { ApiEndpoints } from "./apiClient";
import {
  writable,
  get,
  type Readable,
  derived,
  type Writable,
} from "svelte/store";

abstract class Storage {
  abstract get(key: string): any;
  abstract set(key: string, value: any, expInSec?: number): void;
  abstract del(key: string): void;
  abstract exists(key: string): boolean;
  abstract clear(): void;
}

class LocalStorage extends Storage {
  prefix =
    import.meta.env.VITE_LS_PREFIX && import.meta.env.VITE_LS_PREFIX !== ""
      ? import.meta.env.VITE_LS_PREFIX + "-"
      : "";
  getWithExp(key: string) {
    const storedValue = localStorage.getItem(this.prefix + key);
    if (!storedValue) return undefined;
    const { value, exp } = JSON.parse(storedValue);
    if (exp && exp < Date.now()) {
      this.del(key);
      return undefined;
    }
    return [value, exp];
  }
  get(key: string) {
    const res = this.getWithExp(key);
    if (res) return res[0];
    return undefined;
  }
  set(key: string, value: any, expInSec?: number): void {
    localStorage.setItem(
      this.prefix + key,
      JSON.stringify({
        value,
        exp: expInSec ? Date.now() + expInSec * 1000 : null,
      }),
    );
  }
  del(key: string) {
    localStorage.removeItem(this.prefix + key);
  }
  exists(key: string) {
    key = this.prefix + key;
    for (let i = localStorage.length - 1; i >= 0; i--) {
      if (localStorage.key(i) === key) return true;
    }
    return false;
  }
  clear() {
    const keys: string[] = [];
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key?.startsWith(this.prefix)) {
        keys.push(key);
      }
    }
    for (const key of keys) {
      localStorage.removeItem(key);
    }
  }
}

class MemoryStorage extends Storage {
  memo = new Map<string, [string, number | undefined]>();
  get(key: string) {
    const storedValue = this.memo.get(key);
    if (!storedValue) return undefined;
    try {
      return JSON.parse(storedValue[0]);
    } catch {
      return storedValue;
    }
  }
  set(key: string, value: any, expInSec?: number) {
    const storedValue = this.memo.get(key);
    clearTimeout(storedValue?.[1]);
    this.memo.set(key, [
      JSON.stringify(value),
      expInSec
        ? setTimeout(this.del.bind(this, key), expInSec * 1000)
        : undefined,
    ]);
  }
  del(key: string) {
    this.memo.delete(key);
  }
  exists(key: string) {
    return this.memo.has(key);
  }
  clear(): void {
    for (const data of this.memo) {
      clearTimeout(data[1][1]);
    }
    this.memo = new Map();
  }
}

class LocalAndMemoryStorage extends Storage {
  localStorage = new LocalStorage();
  memoryStorage = new MemoryStorage();
  clear(): void {
    this.memoryStorage.clear();
    this.localStorage.clear();
  }
  del(key: string): void {
    this.memoryStorage.del(key);
    this.localStorage.del(key);
  }
  exists(key: string): boolean {
    return this.memoryStorage.exists(key) || this.localStorage.exists(key);
  }
  set(key: string, value: any, expInSec?: number): void {
    this.memoryStorage.del(key);
    this.localStorage.set(key, value, expInSec);
  }
  get(key: string) {
    const memoRes = this.memoryStorage.get(key);
    if (memoRes !== undefined) return memoRes;
    const localRes = this.localStorage.getWithExp(key);
    if (localRes === undefined) return undefined;
    this.memoryStorage.set(key, localRes[0], (localRes[1] - Date.now()) / 1000);
    return localRes[0];
  }
}

export type LS_TYPES = {
  accessToken: string;
  clusters: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.cluster,
    undefined
  >;
  profile: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.profile,
    undefined
  >;
  complain_categories: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.complain_categories,
    undefined
  >;
  device_types: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.device_types,
    undefined
  >;
  devices: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.devices,
    undefined
  >;
  aqi_and_units: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.aqi_and_units,
    undefined
  >;
  preferences: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.preferences,
    undefined
  >;
  latest_features: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.latest_features,
    undefined
  >;
  master_org: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.master_org,
    undefined
  >;
  module_expiry: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.module_expiry,
    undefined
  >;
  modules: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.modules,
    undefined
  >;
  org: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.org,
    undefined
  >;
  widgets: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.widgets,
    undefined
  >;
  lastUpdatedToken: Exclude<
    typeof ApiEndpoints.GET_UsersOverviewV2.response.body.lastUpdatedToken,
    undefined
  >;
  devicesData: Record<
    string,
    (typeof ApiEndpoints.GET_DevicesData.response.body)[number]["payload"][number]
  >;
};
type LSStore<K extends keyof LS_TYPES> = Writable<LS_TYPES[K]> & {
  del(): void;
  exists(): boolean;
  raw: Readable<LS_TYPES[K] | undefined>;
};

export default class LS {
  private static get<K extends keyof LS_TYPES>(
    storage: Storage,
    key: K,
  ): LS_TYPES[K] | undefined {
    return storage.get(key);
  }
  private static update<K extends keyof LS_TYPES>(
    storage: Storage,
    key: K,
    expInSec: undefined | number,
    fn: (val: LS_TYPES[K]) => LS_TYPES[K],
  ) {
    const data = storage.get(key);
    if (data === undefined) throw new Error("No Data Found!");
    const newData = fn(data);
    storage.set(key, newData, expInSec);
    this.storage.set(storage);
    return storage;
  }
  private static set<K extends keyof LS_TYPES>(
    storage: Storage,
    key: K,
    expInSec: undefined | number,
    val: LS_TYPES[K],
  ) {
    storage.set(key, val, expInSec);
    this.storage.set(storage);
    return storage;
  }
  private static del<K extends keyof LS_TYPES>(storage: Storage, key: K) {
    storage.del(key);
    this.storage.set(storage);
  }
  private static exists<K extends keyof LS_TYPES>(storage: Storage, key: K) {
    return storage.exists(key);
  }
  static clear() {
    const storage = get(LS.storage);
    storage.clear();
    this.storage.set(storage);
  }
  private static req<T>(val: T | undefined): T {
    if (val === undefined) throw new Error("Data not found!");
    return val;
  }
  private static storage = writable<Storage>();
  private static deriveStore<K extends keyof LS_TYPES>(
    key: K,
    expInSec?: number,
  ): LSStore<K> {
    const storage = get(LS.storage);
    const derivedVal = derived(LS.storage, (LS.get<K>).bind(LS, storage, key));
    return {
      ...derived(derivedVal, (LS.req<LS_TYPES[K]>).bind(LS)),
      set: (LS.set<K>).bind(LS, storage, key, expInSec),
      update: (LS.update<K>).bind(LS, storage, key, expInSec),
      del: (LS.del<K>).bind(LS, storage, key),
      exists: (LS.exists<K>).bind(LS, storage, key),
      raw: derivedVal,
    };
  }
  // only in iframe access_token will be provided on init.
  static initializeStorage(isIframe: boolean) {
    if (get(LS.storage)) {
      throw new Error("Already Initialized!");
    }
    if (isIframe) {
      LS.storage.set(new MemoryStorage());
    } else {
      LS.storage.set(new LocalAndMemoryStorage());
    }
    LS.accessToken = LS.deriveStore("accessToken", 3600 * 24 * 6);
    LS.clusters = LS.deriveStore("clusters", 3600 * 24);
    LS.profile = LS.deriveStore("profile", 3600 * 24);
    LS.complain_categories = LS.deriveStore("complain_categories", 3600 * 24);
    LS.device_types = LS.deriveStore("device_types", 3600 * 24);
    LS.devices = LS.deriveStore("devices", 3600 * 24);
    LS.aqi_and_units = LS.deriveStore("aqi_and_units", 3600 * 24);
    LS.preferences = LS.deriveStore("preferences", 3600 * 24);
    LS.latest_features = LS.deriveStore("latest_features", 3600 * 24);
    LS.master_org = LS.deriveStore("master_org", 3600 * 24);
    LS.module_expiry = LS.deriveStore("module_expiry", 3600 * 24);
    LS.modules = LS.deriveStore("modules", 3600 * 24);
    LS.org = LS.deriveStore("org", 3600 * 24);
    LS.widgets = LS.deriveStore("widgets", 3600 * 24);
    LS.lastUpdatedToken = LS.deriveStore("lastUpdatedToken", 3600 * 24);
    LS.devicesData = LS.deriveStore("devicesData", 3600 * 24);
    const derivedJwt = derived(LS.accessToken, decryptJWT);
    LS.jwt = Object.assign(derived(derivedJwt, (LS.req<JWT>).bind(LS)), {
      raw: derivedJwt,
    });
  }
  static isInIframe() {
    return get(LS.storage) instanceof MemoryStorage;
  }
  static accessToken: LSStore<"accessToken">;
  static clusters: LSStore<"clusters">;
  static profile: LSStore<"profile">;
  static complain_categories: LSStore<"complain_categories">;
  static device_types: LSStore<"device_types">;
  static devices: LSStore<"devices">;
  static aqi_and_units: LSStore<"aqi_and_units">;
  static preferences: LSStore<"preferences">;
  static latest_features: LSStore<"latest_features">;
  static master_org: LSStore<"master_org">;
  static module_expiry: LSStore<"module_expiry">;
  static modules: LSStore<"modules">;
  static org: LSStore<"org">;
  static widgets: LSStore<"widgets">;
  static lastUpdatedToken: LSStore<"lastUpdatedToken">;
  static devicesData: LSStore<"devicesData">;
  static jwt: Readable<JWT> & { raw: Readable<JWT | null> };
}
