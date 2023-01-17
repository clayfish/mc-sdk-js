import { AxiosResponse } from "axios";

// controllers
import { SDKController } from "controllers/SDKController";
import { Topia } from "controllers/Topia";

// interfaces
import { AssetInterface, AssetOptionalInterface } from "interfaces";

// types
import { ResponseType } from "types";

// utils
import { getErrorResponse } from "utils";

/**
 * Create an instance of Asset class with a given asset id and optional attributes and session credentials.
 *
 * ```ts
 * await new Asset(topia, "assetId", { attributes: { assetName: "My Asset", isPublic: false } });
 * ```
 */
export class Asset extends SDKController implements AssetInterface {
  readonly id?: string;
  jwt?: string;

  constructor(topia: Topia, id: string, options: AssetOptionalInterface = { attributes: {}, credentials: {} }) {
    super(topia, options.credentials);
    this.id = id;
    Object.assign(this, options.attributes);
  }

  fetchPlatformAssets(): Promise<ResponseType> {
    return new Promise((resolve) => {
      this.topia.axios
        .get("/assets/topia-assets", this.requestOptions)
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error) => {
          resolve(getErrorResponse({ error }));
        });
    });
  }
}

export default Asset;
