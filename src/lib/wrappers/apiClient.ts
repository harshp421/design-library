import authorisation from "$lib/api/authorisation";
import * as ApiEndpoints from "$lib/api/endpoints";
import { CustomError } from "$lib/classes/customError";
import axios from "axios";
import LS from "./localStorage";
import { get } from "svelte/store";

const baseURL = import.meta.env.VITE_BASE_URL;

ApiEndpoints.Endpoint.prototype.trigger = async function (
  this: ApiEndpoints.Endpoint<any, any>,
  payload: any,
) {
  try {
    let url = baseURL + this.path;
    for (const [key, value] of Object.entries(payload.params || {})) {
      url = url.replace(`{${key}}`, value as string);
    }
    const token = get(LS.accessToken.raw);
    const response = await axios.request({
      method: this.method,
      url,
      data: payload.body,
      params: payload.query,
      headers: Object.assign(
        payload.headers ?? {},
        token ? { Authorization: `Bearer ${token}` } : {},
      ),
      validateStatus: () => true,
    });

    if (response.status == 401) {
      authorisation.logOut();
    }

    if (response.status !== 200) {
      throw new CustomError(
        response.status,
        response.statusText,
        response.headers["x-request-id"],
        response.data,
      );
    }

    return response.data;
  } catch (error) {
    console.error("API Trigger Error:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(
      -1,
      "Unexpected error",
      undefined,
      "Error in Program",
    );
  }
};

export { ApiEndpoints };
