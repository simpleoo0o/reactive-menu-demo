import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
import Markdown from 'vite-plugin-md'
import code from '@yankeeinlondon/code-builder'
import packageData from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/' + packageData.name + '/',
    build: {
        outDir: 'docs'
    },
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Markdown({
            frontmatterDefaults: {
                requireAuth: false,
            },
            style: {
                baseStyle: 'github',
            },
            builders: [code({
                theme: 'base',
            })]
        }),
        monacoEditorPlugin.default({
            languageWorkers: ['json', 'editorWorkerService']
        })
    ]
})
