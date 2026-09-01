import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // CDP returns loosely-typed JSON; `any` at that boundary stays visible
      // as a warning rather than blocking CI. Type it out incrementally.
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      // Inherited from OmniOS at extraction: SurfaceClient's load effect
      // sets state on failure. Advisory here too, so the split does not
      // change behaviour by changing what CI rejects. Refactor separately.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;
