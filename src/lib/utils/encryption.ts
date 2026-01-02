import * as CryptoJS from "crypto-js";

export function getEncryptedPassword(password: string, key: string): string {
  try {
    const keyBytes = CryptoJS.enc.Utf8.parse(key.padEnd(32, "\0"));
    const iv = CryptoJS.lib.WordArray.random(128 / 8);
    const encrypted = CryptoJS.AES.encrypt(password, keyBytes, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const combined = CryptoJS.lib.WordArray.create(
      iv.words.concat(encrypted.ciphertext.words),
    );
    return CryptoJS.enc.Base64.stringify(combined);
  } catch (exception) {
    console.info(exception);
    return "";
  }
}

export type JWT = {
  userId: number;
  orgId: string;
  userEmail: string;
  role: 0 | 1;
  isTopOrg: boolean;
  id: "86367bd9-69de-45d2-8c94-393d4c414563";
  version: "4";
  iss: "terminal_config:oizom_instruments";
};
export function decryptJWT(token: string | undefined) {
  if (!token) return null;
  try {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decrypt JWT:", error);
    return undefined;
  }
}
