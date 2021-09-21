import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from '@rollup-plugin-terser';

export default {
    input: './src/index.js', 
    output: [{
        format: 'umd', 
        file: 'dist/vue.js', 
        name: 'Vue',
        sourcemap: true
    },
    {
        file:"./dist/bundle.cjs.js",
        format: "cjs",
    },
    {
        file:"./dist/bundle.esm.js",
        format: "esm",
        plugin: [terser()]
    }],
    plugins: [json(),nodeResolve(),commonjs()],
    external:["vue"],
}