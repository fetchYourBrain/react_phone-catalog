import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Вимкнути правило для імпорту React
      "react/jsx-uses-react": "off",
    },
    settings: {
      react: {
        version: "detect", // Автоматично визначати версію React
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off", // Повторне вимкнення правила
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "react/prop-types": "off",
    },
  },
  { ignores: ["build/", "dist/assets/index-CWtxwvIe.js", "node_modules"] },
];
