import { defineConfig } from "vite";
export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: "ENV_", // 改变vite校验环境变量前缀名
});
