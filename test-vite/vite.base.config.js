import { defineConfig } from "vite";
import viteAliases from "./viteAliases";
import path from "path";
import { vitePluginMock } from "vite-plugin-mock";
export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: "ENV_",
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //     "@assets": path.resolve(__dirname, "./src/assets"),
  //   },
  // },
  plugins: [viteAliases(), vitePluginMock()],
});
