import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/main.cjs',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve({ preferBuiltins: true }), 
    commonjs(), 
    typescript({ tsconfig: './tsconfig.json' }), 
    json(),
    terser(), 
  ],
  external: ['path', 'os', 'crypto'], 
};