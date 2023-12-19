export default (options) => {
  return {
    // 调用钩子函数：
    transformIndexHtml: {
      order: "pre",
      transform: (html, ctx) => {
        console.log(html);
        return html.replace(/<%= title %>/g, options.inject.data.title);
      },
    },
  };
};
