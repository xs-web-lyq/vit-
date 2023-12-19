module.exports = function (aliasConf, JSContent) {
  // aliasConf 是获取到的vite.config.js中配置的alias对象
  // JSContent 是获取到是需要进行转换的js内容
  const entires = Object.entries(aliasConf);
  let newJSContent = JSContent;
  entires.forEach((item) => {
    const [alias, path] = item;
    // vite官方使用的需要相对路径处理，通过path进行相对路径处理
    // 因为浏览器需要的是/src开头的路径，所以需要将/src进行截取
    const srcIndex = path.indexOf("/src");
    const realPath = path.slice(srcIndex, path.length);
    // 将alias替换成realPath
    newJSContent = newJSContent.replace(new RegExp(alias, "g"), realPath);
  });
  return newJSContent;
};
