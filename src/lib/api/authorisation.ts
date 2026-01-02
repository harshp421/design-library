import { goto } from "$app/navigation";
import APP_CONSTS from "$lib/constants/app";
import { getEncryptedPassword } from "$lib/utils/encryption";
import { ApiEndpoints } from "$lib/wrappers/apiClient";
import LS from "$lib/wrappers/localStorage";

class Authorisation {
  async login(
    body: typeof ApiEndpoints.LoginV2.request.body,
  ): Promise<typeof ApiEndpoints.LoginV2.response.body> {
    let response;
    if (body.share_token) {
      response = await ApiEndpoints.LoginV2.trigger({
        body: { share_token: body.share_token },
      });
    } else {
      let encryptPassword = "";
      const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;
      if (encryptionKey && body.password) {
        encryptPassword = getEncryptedPassword(body.password, encryptionKey);
      }
      response = await ApiEndpoints.LoginV2.trigger({
        body: { email: body.email, password: encryptPassword },
      });
    }
    LS.accessToken.set(response.token.access_token);
    await goto(APP_CONSTS.ROUTES.THEME);
    window.location.reload();
    return response;
  }
  async logOut() {
    await goto(APP_CONSTS.ROUTES.LOGIN);
    window.location.reload();
  }
}
const authorisation = new Authorisation();
export default authorisation;
