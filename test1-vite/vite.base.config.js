import { defineConfig } from "vite";
// const viteAliases = require("./viteAliases.js");
import viteAliases from "./viteAliases.js";
// import { createHtmlPlugin } from "vite-plugin-html";
import CreatePluginHtml from "./CreatePluginHtml.js";
const postcssPresetEnv = require("postcss-preset-env");
// import { viteMockServe } from "vite-plugin-mock";
import VitePluginMock from "./VitePluginMock.js";
export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: "ENV_", // 改变vite校验环境变量前缀名
  css: {
    modules: {
      localsConvention: "camelCaseOnly", // 驼峰命名 --- 此属性为设置css模块的命名规则（驼峰还是中划线）
      scopeBehaviour: "local", // 全局 --- 此属性为设置css模块的作用域规则（全局还是局部）有hash就是开启了模块化的一个标识，因为他可以保证产生不同的hash值，来控制我们的样式类名不被覆盖。
      generateScopedName: "[name]_[local]_[hash:5]",
    },
    preprocessorOptions: {
      less: {
        // 整个配置对象都会最终给到less的执行参数（全局参数）中去
        math: "always",
        globalVars: {
          // 全局变量
          // 注意：如果是全局变量，那么在less中使用的时候，需要加上@符号
          // 例如：@mainColor: red;
          // 那么在less中使用的时候，就需要使用@mainColor;
          mainColor: "red", // 主题色可以通过这种方法进行配置，也可以避免再各个组件频繁引入全局的less变量文件
        },
      },
      sass: {},
    },
    devSourcemap: true, // 开启sourcemap ， 编译后文件和源文件进行映射关系
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
  plugins: [
    viteAliases(),
    // viteMockServe(),
    VitePluginMock(),
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       title: "aaa",
    //     },
    //   },
    // }),
    CreatePluginHtml({
      inject: {
        data: {
          title: "首页",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        assetFileNames: "[hash].[name].[ext]",
        outDir: "dist",
        assetsDir: "assets",
      },
    },
  },
});
