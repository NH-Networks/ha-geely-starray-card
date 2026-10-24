import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/geely-starray-card.ts",
  output: [
    {
      file: "geely-starray-card.js",
      format: "es",
      sourcemap: false,
    },
    {
      file: "geely-car-card.js",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [resolve(), typescript(), terser()],
};
