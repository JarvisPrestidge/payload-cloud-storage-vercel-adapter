import type { Adapter, GeneratedAdapter } from "@payloadcms/plugin-cloud-storage/types";

import getGenerateUrl from "./generateURL";
import getHandleDelete from "./handleDelete";
import getHandleUpload from "./handleUpload";
import getStaticHandler from "./staticHandler";

export type VercelBlobAdapterArgs = {
    /**
     * Vercel API Token
     *
     * @type {string}
     */
    token: string;
    /**
     * Vercel Store ID - Can be found in the Vercel Dashboard
     *
     * @type {string}
     */
    storeId: string;
    /**
     * Vercel upload options
     *
     * @type {VercelBlobAdapterUploadOptions}
     */
    uploadOptions?: VercelBlobAdapterUploadOptions;
};

export type VercelBlobAdapterUploadOptions = {
    /**
     * Access level for the uploaded file
     *
     * @type {"public"}
     */
    access?: "public";
    /**
     *  Add a random suffix to the file name
     *
     * @type {boolean}
     */
    addRandomSuffix?: boolean;
    /**
     * Cache control max age in seconds
     *
     * @type {number}
     */
    cacheControlMaxAge?: number;
};

const defaultUploadOptions: VercelBlobAdapterUploadOptions = {
    access: "public",
    addRandomSuffix: false,
    cacheControlMaxAge: 31536000
};

/**
 * Vercel Blob Adapter
 *
 * @param {VercelBlobAdapterArgs} {
 *     token,
 *     storeId,
 *     uploadOptions = {
 *         access: "public",
 *         addRandomSuffix: false,
 *         cacheControlMaxAge: 31536000
 *     }
 * }
 * @returns {*}  {Adapter}
 */
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
