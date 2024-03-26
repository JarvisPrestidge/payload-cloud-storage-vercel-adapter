import path from "path";
import type { HandleDelete } from "@payloadcms/plugin-cloud-storage/types";
import { del } from "@vercel/blob";

type HandleDeleteArgs = {
    token: string;
    baseUrl: string;
    prefix?: string;
};

const getHandleDelete = ({ token, baseUrl }: HandleDeleteArgs): HandleDelete => {
    return async ({ filename, doc: { prefix = "" } }) => {
        const fileUrl = `${baseUrl}/${path.posix.join(prefix, filename)}`;
        const deletedBlob = await del(fileUrl, { token });

        return deletedBlob;
    };
};

export default getHandleDelete;
