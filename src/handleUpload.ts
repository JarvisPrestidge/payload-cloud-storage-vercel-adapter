import path from "path";
import type { HandleUpload } from "@payloadcms/plugin-cloud-storage/types";
import { put } from "@vercel/blob";

import type { VercelBlobAdapterUploadOptions } from "./index";

type HandleUploadArgs = VercelBlobAdapterUploadOptions & {
    token: string;
    prefix?: string;
};

const getHandleUpload = ({
    token,
    prefix = "",
    access = "public",
    addRandomSuffix,
    cacheControlMaxAge
}: HandleUploadArgs): HandleUpload => {
    return async ({ data, file: { filename, buffer, mimeType } }) => {
        const fileKey = path.posix.join(data.prefix || prefix, filename);

        await put(fileKey, buffer, {
            token,
            contentType: mimeType,
            access,
            addRandomSuffix,
            cacheControlMaxAge
        });

        return data;
    };
};

export default getHandleUpload;
