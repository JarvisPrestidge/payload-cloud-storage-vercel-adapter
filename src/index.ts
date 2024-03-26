import type { Adapter, GeneratedAdapter } from "@payloadcms/plugin-cloud-storage/types";

import getGenerateUrl from "./generateURL";
import getHandleDelete from "./handleDelete";
import getHandleUpload from "./handleUpload";
import getStaticHandler from "./staticHandler";

export type VercelBlobAdapterArgs = {
    token: string;
    storeId: string;
    uploadOptions?: VercelBlobAdapterUploadOptions;
};

export type VercelBlobAdapterUploadOptions = {
    access?: "public";
    addRandomSuffix?: boolean;
    cacheControlMaxAge?: number;
};

const defaultUploadOptions: VercelBlobAdapterUploadOptions = {
    access: "public",
    addRandomSuffix: false,
    cacheControlMaxAge: 31536000
};

export const vercelBlobAdapter = ({ token, storeId, uploadOptions = {} }: VercelBlobAdapterArgs): Adapter => {
    const { access, addRandomSuffix, cacheControlMaxAge } = {
        ...defaultUploadOptions,
        ...uploadOptions
    };

    if (!token) throw new Error("Vercel Blob Adapter requires a token");
    if (!storeId) throw new Error("Vercel Blob Adapter requires a storeId");

    const baseUrl = `https://${storeId}.${access}.blob.vercel-storage.com`;

    return ({ collection, prefix }): GeneratedAdapter => {
        return {
            handleUpload: getHandleUpload({ token, prefix, access, addRandomSuffix, cacheControlMaxAge }),
            handleDelete: getHandleDelete({ token, baseUrl, prefix }),
            generateURL: getGenerateUrl({ baseUrl, prefix }),
            staticHandler: getStaticHandler({ baseUrl }, collection)
        };
    };
};
