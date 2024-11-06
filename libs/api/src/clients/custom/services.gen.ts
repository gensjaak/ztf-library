// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-fetch";
import type { GetData, GetError, GetResponse } from "./types.gen";

export const client = createClient(createConfig());

export const get = <ThrowOnError extends boolean = false>(
  options: Options<GetData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<GetResponse, GetError, ThrowOnError>({
    ...options,
    url: "/books",
  });
};