import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    target: "esnext",
    outDir: "dist",
    dts: true,
    clean: true,
    external: ["node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/getFilePrefix"]
});
