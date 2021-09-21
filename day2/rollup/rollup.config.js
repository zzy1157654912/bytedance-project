import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

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