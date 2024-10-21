import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/timple_test/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
