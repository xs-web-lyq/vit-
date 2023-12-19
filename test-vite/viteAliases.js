import path from "path";
import fs from "fs";

export default () => {
  return {
    config(config, env) {
      // config: 目前的一个 vite 配置对象
      // env: 环境变量对象
      // console.log("config----->", config);
      // console.log("env----->", env);

      // 将src目录下的文件读出来
      const result = fs.readdirSync(path.resolve(__dirname, "./src"));
      console.log("result----->", result);
      // 将src目录下的文件夹读出来
      const dirs = result.filter((item) => {
        return fs
          .statSync(path.resolve(__dirname, "./src", item))
          .isDirectory();
      });
      //
      console.log("dirs----->", dirs);

      // 别名配置项
      const lastAlias = {};
      dirs.forEach((dir) => {
        key = `@${dir}`;
        lastAlias[key] = path.resolve(__dirname, "./src", dir);
      });
      console.log("alias----->", lastAlias);

      return {
        // 返回一个对象，将会被合并到 vite 配置对象中
        resolve: { alias: lastAlias },
      };
    },
  };
};
