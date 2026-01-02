import authorisation from "$lib/api/authorisation";
import { ApiEndpoints } from "$lib/wrappers/apiClient";
import LS from "$lib/wrappers/localStorage";
import { derived, get } from "svelte/store";

export function hasAppStartupData() {
  return (
    LS.clusters.exists() &&
    LS.profile.exists() &&
    LS.complain_categories.exists() &&
    LS.device_types.exists() &&
    LS.devices.exists() &&
    LS.latest_features.exists() &&
    LS.master_org.exists() &&
    LS.module_expiry.exists() &&
    LS.modules.exists() &&
    LS.org.exists() &&
    LS.widgets.exists() &&
    LS.aqi_and_units.exists() &&
    LS.preferences.exists() &&
    LS.devicesData.exists()
  );
}

export async function getDeviceData(deviceIds: string[]): Promise<void> {
  const userId = get(LS.jwt).userId;
  const res = await ApiEndpoints.GET_DevicesData.trigger({
    query: { deviceIds, processType: "latest", userId, mode: "all" },
  });
  LS.devicesData.set(
    Object.fromEntries(res.map((x) => [x.deviceId, x.payload[0]])),
  );
}

export async function fetchAppStartupData(): Promise<void> {
  const userId = get(LS.jwt).userId;
  const lastUpdatedToken = get(LS.lastUpdatedToken.raw);
  const queryParams: typeof ApiEndpoints.GET_UsersOverviewV2.request.query = {};
  if (lastUpdatedToken) queryParams.lastUpdatedToken = lastUpdatedToken;
  queryParams.cluster = LS.clusters.exists() ? "auto" : "require";
  queryParams.profile = LS.profile.exists() ? "auto" : "require";
  queryParams.complain_categories = LS.complain_categories.exists()
    ? "auto"
    : "require";
  queryParams.device_types = LS.device_types.exists() ? "auto" : "require";
  queryParams.devices = LS.devices.exists() ? "auto" : "require";
  queryParams.latest_features = LS.latest_features.exists()
    ? "auto"
    : "require";
  queryParams.master_org = LS.master_org.exists() ? "auto" : "require";
  queryParams.module_expiry = LS.module_expiry.exists() ? "auto" : "require";
  queryParams.modules = LS.modules.exists() ? "auto" : "require";
  queryParams.org = LS.org.exists() ? "auto" : "require";
  queryParams.widgets = LS.widgets.exists() ? "auto" : "require";
  queryParams.aqi_and_units = LS.aqi_and_units.exists() ? "auto" : "require";
  queryParams.preferences = LS.preferences.exists() ? "auto" : "require";
  const response = await ApiEndpoints.GET_UsersOverviewV2.trigger({
    params: { userId },
    query: { ...queryParams, lastUpdatedToken },
  });
  if (response.cluster) LS.clusters.set(response.cluster);
  if (response.profile) LS.profile.set(response.profile);
  if (response.complain_categories)
    LS.complain_categories.set(response.complain_categories);
  if (response.device_types) LS.device_types.set(response.device_types);
  if (response.devices) LS.devices.set(response.devices);
  if (response.latest_features)
    LS.latest_features.set(response.latest_features);
  if (response.master_org) LS.master_org.set(response.master_org);
  if (response.module_expiry) LS.module_expiry.set(response.module_expiry);
  if (response.modules) LS.modules.set(response.modules);
  if (response.org) LS.org.set(response.org);
  if (response.widgets) LS.widgets.set(response.widgets);
  if (response.aqi_and_units) LS.aqi_and_units.set(response.aqi_and_units);
  if (response.preferences) LS.preferences.set(response.preferences);
  if (response.lastUpdatedToken) {
    LS.lastUpdatedToken.set(response.lastUpdatedToken);
  } else {
    LS.lastUpdatedToken.del();
  }
}
