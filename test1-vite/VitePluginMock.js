const fs = require("fs");
const path = require("path");

module.exports = (config) => {
  // 在这里就是需要拦截发送的请求，fetch 和 axios请求地址
  return {
    configureServer(server) {
      console.log("mock users");
      const mockStat = fs.statSync("mock");
      const isDirectory = mockStat.isDirectory();
      console.log(isDirectory);
      let mockResult = [];
      console.log(mockResult);
      if (isDirectory) {
        // console.log(process.cwd());
        mockResult = fs.readFileSync(
          path.resolve(process.cwd(), "mock/index.js")
        );
        console.log(mockResult);
      }
      // 服务器相关配置
      server.middlewares.use((req, res, next) => {
        console.log(req.url);
        const matchItem = mockResult.find(
          (mockDescriptor) => mockDescriptor.url === req.url
        );
        if (matchItem) {
          const resqonseData = matchItem.response(req);
          res.headers.set("Content-Type", "application/json");
          res.end(JSON.stringify(resqonseData));
        }
        // next();
      });
    },
  };
};
