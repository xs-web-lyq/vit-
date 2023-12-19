import { defineConfig } from "vite";
import viteCDNPlugin from "vite-plugin-cdn-import";

export default defineConfig({
  build: {
    // rollupOptions: {
    //   output: {
    //     manualChunks: (id) => {
    //       if (id.includes("node_modules")) {
    //         return "vendor";
    //       }
    //     },
    //   },
    // },
  },
  plugins: [
    viteCDNPlugin({
      modules: [
        {
          name: "lodash",
          var: "_",
          path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`,
        },
      ],
    }),
  ],
});
