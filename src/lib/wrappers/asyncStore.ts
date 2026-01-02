import { derived, writable } from "svelte/store";

type StoreState<T> =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "error"; error: any }
  | { type: "success"; data: T };

export function createAsyncStore<I, T>(
  job: (i: I) => Promise<T> | { trigger(req: I): Promise<T> },
  opt?: {
    showToastOnError?: boolean;
    showToastOnSuccess?: boolean;
    onSuccess?: (data: T) => void;
  },
) {
  const options = {
    showToastOnError: false,
    showToastOnSuccess: false,
    ...opt,
  };

  const store = writable<StoreState<T>>({ type: "idle" });

  const isLoading = derived(store, ($s) => $s.type === "loading");

  async function execute(input: I) {
    store.set({ type: "loading" });
    try {
      const data =
        "trigger" in job && typeof job.trigger === "function"
          ? await job.trigger(input)
          : typeof job === "function"
            ? job(input)
            : (() => {
                throw new Error("Unknwon Job Type");
              })();
      store.set({ type: "success", data });

      if (options.showToastOnSuccess && typeof data === "string") {
        // toast.success(data);
      }

      options.onSuccess?.(data);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);

      if (options.showToastOnError) {
        // toast.error(errorMsg);
      }

      store.set({ type: "error", error: errorMsg });
      throw err;
    }
  }

  function reset() {
    store.set({ type: "idle" });
  }

  return { store, execute, isLoading, reset } as const;
}

export function getValue<Req, Res>(
  endpoint: { name: string; trigger(req: Req): Promise<Res> },
  req: Req,
) {
  const store = writable<StoreState<Res>>({ type: "idle" });
  async function reload() {
    store.set({ type: "loading" });
    try {
      const data = await endpoint.trigger(req);
      store.set({ type: "success", data });
    } catch (err: any) {
      store.set({ type: "error", error: err.message ?? "Unknown error" });
    }
  }
  return [store, reload] as const;
}
