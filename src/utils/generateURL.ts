import path from "path";
import type { GenerateURL } from "@payloadcms/plugin-cloud-storage/types";

type GenerateUrlArgs = {
    baseUrl: string;
    prefix?: string;
};

const getGenerateUrl = ({ baseUrl }: GenerateUrlArgs): GenerateURL => {
    return ({ filename, prefix = "" }) => {
        return `${baseUrl}/${path.posix.join(prefix, filename)}`;
    };
};

export default getGenerateUrl;
