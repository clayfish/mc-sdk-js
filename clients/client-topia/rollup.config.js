import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    commonjs({
      exclude: "node_modules",
    }),
    nodeResolve({ preferBuiltins: true, extensions: [".svg", ".js", ".ts"] }),
    json(),
    resolve(),
    typescript(),
  ],
};
