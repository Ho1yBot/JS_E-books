// import plugin from "rollup-plugin-import-css";
import css from "rollup-plugin-import-css";
import { nodeResolve } from "@rollup/plugin-node-resolve"
import copy from 'rollup-plugin-copy';

export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "iife"
    },
    plugins: [css({
        output: 'bundle.css' // Эта опция объединит все CSS файлы в один bundle.css
    }),
    nodeResolve(),
    copy({
        targets: [
            { src: 'static/*', dest: 'dist/static' } // Копирование всех файлов из static в dist/static
        ]
    })
    ]
}