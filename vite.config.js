import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
import { visualizer } from 'rollup-plugin-visualizer'
import packageData from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/' + packageData.name + '/',
    build: {
        outDir: 'docs'
    },
    plugins: [
        vue(),
        monacoEditorPlugin.default({
            languageWorkers: ['json', 'editorWorkerService']
        }),
        visualizer({
            open:true
        })
    ]
})
