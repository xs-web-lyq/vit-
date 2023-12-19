module.exports = [
  {
    method: "post",
    url: "/api/users",
    response: ({ body }) => {
      // body --> 请求体
      // page pageSize body
      return {
        code: 200,
        msg: "success",
        data: [],
      };
    },
  },
];
