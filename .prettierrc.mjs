/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
    semi: true,
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    singleQuote: false,
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    trailingComma: "none",
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        "<TYPES>", 
        "<THIRD_PARTY_MODULES>", 
        "", 
        "^[../]", 
        "^[./]"
    ],
    importOrderTypeScriptVersion: "4.4.0"
};

export default config;
