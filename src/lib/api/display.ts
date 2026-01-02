import { ApiEndpoints } from "$lib/wrappers/apiClient";
import LS from "$lib/wrappers/localStorage";
import { get } from "svelte/store";

class DisplayEndpoints {
  async login(): Promise<
    typeof ApiEndpoints.GET_UsersAllDisplays.response.body
  > {
    let response;

    response = await ApiEndpoints.GET_UsersAllDisplays.trigger({
      params: { userId: get(LS.jwt).userId },
    });

    return response;
  }
}
const displayEndpoints = new DisplayEndpoints();
export default displayEndpoints;
