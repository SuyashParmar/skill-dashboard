import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Override the rule to manage unused variables
      "@typescript-eslint/no-unused-vars": [
        "warn", // Or "off" to disable, "error" to enforce
        { argsIgnorePattern: "^_" }, // Ignore arguments that start with "_"
      ],
      "@typescript-eslint/no-explicit-any": [
        "warn",
        { argsIgnorePattern: "^_" },
      ]
    }
  }
];


export default eslintConfig;
