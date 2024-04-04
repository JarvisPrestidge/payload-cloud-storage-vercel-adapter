import path from "path";
import type { CollectionConfig } from "payload/types";
import { StaticHandler } from "@payloadcms/plugin-cloud-storage/types";
import { head } from "@vercel/blob";

import { getFilePrefix } from "../utils/getFilePrefix";

type StaticHanlderArgs = {
    token: string;
    baseUrl: string;
};

const getStaticHandler = ({ token, baseUrl }: StaticHanlderArgs, collection: CollectionConfig): StaticHandler => {
    return async (req, { params: { filename } }) => {
        try {
            const prefix = await getFilePrefix({ req, collection });

            const fileUrl = `${baseUrl}/${path.posix.join(prefix, filename)}`;

            const blobMetadata = await head(fileUrl, { token });
            if (!blobMetadata) {
                return new Response(null, { status: 404, statusText: "Not Found" });
            }

            const { contentType, size, contentDisposition } = blobMetadata;
            const response = await fetch(fileUrl);
            const blob = await response.blob();

            if (!blob) {
                return new Response(null, { status: 204, statusText: "No Content" });
            }

            const bodyBuffer = await blob.arrayBuffer();

            return new Response(bodyBuffer, {
                headers: new Headers({
                    "Content-Length": String(size),
                    "Content-Type": contentType,
                    "Content-Disposition": contentDisposition
                }),
                status: 200
            });
        } catch (error) {
            req.payload.logger.error(error);
            return new Response("Internal Server Error", { status: 500 });
        }
    };
};

export default getStaticHandler;
