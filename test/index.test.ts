import { vercelBlobAdapter, VercelBlobAdapterArgs, VercelBlobAdapterUploadOptions } from "../src/index";

describe("vercelBlobAdapter", () => {
    let args: VercelBlobAdapterArgs;
    let uploadOptions: VercelBlobAdapterUploadOptions;

    beforeEach(() => {
        uploadOptions = {
            access: "public",
            addRandomSuffix: false,
            cacheControlMaxAge: 31536000
        };

        args = {
            token: "testToken",
            storeId: "testStoreId",
            uploadOptions: uploadOptions
        };
    });

    it("should return an Adapter when all arguments are provided", () => {
        expect(() => vercelBlobAdapter(args)).toBeDefined();
    });

    it("should throw an error when no arguments are provided", () => {
        // @ts-expect-error
        expect(() => vercelBlobAdapter()).toThrow();
    });

    it("should throw an error when token is not provided", () => {
        const { token, ...argsMissingToken } = args;
        // @ts-expect-error
        expect(() => vercelBlobAdapter(argsMissingToken)).toThrow();
    });

    it("should throw an error when storeId is not provided", () => {
        const { token, ...argsMissingStoreId } = args;
        // @ts-expect-error
        expect(() => vercelBlobAdapter(argsMissingStoreId)).toThrow();
    });
});
