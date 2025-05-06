import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { SITE } from "./src/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap({
      filter: __page => true,
    }),
    mdx({
      syntaxHighlight: 'shiki', // 或 'shiki'
      remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of Contents" }]], // 添加 remark 插件
      rehypePlugins: [], // 添加 rehype 插件
      remarkRehype: {}, // remark-rehype 选项
      gfm: true, // 启用 GitHub Flavored Markdown
    }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of Contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "everforest-light", dark: "night-owl" },
      wrap: true,
      // defaultColor: "s",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    resolve: {
      alias: {
        flowbite: path.resolve('./node_modules/flowbite'),
        'flowbite/dist': path.resolve('./node_modules/flowbite/dist'),
        'flowbite/dist/flowbite.min.css': path.resolve('./node_modules/flowbite/dist/flowbite.min.css')
      }
    }
    
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "responsive",
  },
  experimental: {
    svg: true,
    responsiveImages: true,
    preserveScriptOrder: true,
  },
});
