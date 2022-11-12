import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default [
  {
    input: './index.ts',
    plugins: [json(), typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    })],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs.js'
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.js'
      }
    ]
  }
];
