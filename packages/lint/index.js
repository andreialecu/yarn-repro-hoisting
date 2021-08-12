module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["eslint-plugin-simple-import-sort", "unused-imports"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "error",
  },
};
