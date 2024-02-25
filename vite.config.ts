import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { env } from 'process'
import Pages from 'vite-plugin-pages'
import svgr from 'vite-plugin-svgr'
import mdx from "@mdx-js/rollup"
import remarkFrontmatter from 'remark-frontmatter' // YAML and such.
import remarkGfm from 'remark-gfm' // Tables, footnotes, strikethrough, task lists, literal URLs.
import remarkPrism from 'remark-prism'
import remarkParse from "remark-parse"
import rehypeStringify from 'rehype-stringify'
import remarkDirective from 'remark-directive'
import rehypeRaw from 'rehype-raw'
import { remarkContainers, remarkFencedCode } from './vite.config.markdown'

// @ts-ignore - no types
import Press from "vite-plugin-press"

const currentDir = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [
      svgr(),
      mdx({
        // See https://mdxjs.com/advanced/plugins
        remarkPlugins: [
          remarkFrontmatter,
          remarkFencedCode,
          remarkDirective,
          remarkGfm,
          remarkParse,
          remarkPrism as any,
          remarkContainers,
        ],
        rehypePlugins: [
          [rehypeRaw, {passThrough:['mdxjsEsm','mdxFlowExpression','mdxJsxFlowElement','mdxJsxTextElement','mdxTextExpression']}],
          rehypeStringify,
        ],
      }),
      Pages({
        extensions: ['tsx', 'mdx']
      }),
      react(),
      Press({
        baseUrl: env.NODE_ENV === 'development'
          ? 'https://localhost:5173'
          : fs.existsSync('public/CNAME') ? 'https://' + fs.readFileSync('public/CNAME', 'utf-8').trim() : undefined,
        metadataPath: 'public/api',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    },
    // assetsInclude: ['**/*.md'],
  }
})
