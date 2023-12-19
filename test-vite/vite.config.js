import { defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式
const envResolver = {
  build: () => {
    console.log("build");
    return Object.assign({}, viteBaseConfig, viteProdConfig);
  },
  serve: () => {
    console.log("dev");
    return Object.assign({}, viteBaseConfig, viteDevConfig);
  },
};

export default defineConfig(({ command, mode }) => {
  console.log("process", process.cwd());

  // 第二个参数为.env的工作目录
  const env = loadEnv(mode, process.cwd(), "");
  console.log("env", env);
  console.log(mode);
  return envResolver[command]();
});

// 为了得到语法提示
/**@type import("vite").UserConfig */
// const config = {
//   optimizeDeps:{

//   },
//   root: "./",
// }
// export default config
