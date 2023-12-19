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
  // console.log("process", process.env);

  // 第二个参数为.env的工作目录 --- mode 为 代码环境 dev | build ,
  // process.cwd() 就是当前项目的根目录, loadEnv 加载.env文件 ;
  // 并根据mode 加载对应的配置 进行覆盖.env文件中的环境配置
  // 如果再shell中输入的是--mode production 则code的值也为production
  // const env = loadEnv(mode, process.cwd(), "");
  // console.log("env", env);
  // console.log(mode, command);
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
