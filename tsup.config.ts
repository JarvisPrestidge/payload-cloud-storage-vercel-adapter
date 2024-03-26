import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    target: "esnext",
    outDir: "dist",
    dts: true,
    clean: true
});
