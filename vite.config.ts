import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), createHtmlPlugin({})],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: process.env.DISABLE_HMR !== 'true',
  }
});
