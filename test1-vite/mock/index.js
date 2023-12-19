import mockJs from "mockjs";
const userList = mockJs.mock({
  "data|100": [
    {
      "id|+1": 1,
      name: "@cname",
      "age|1-100": 1,
      "sex|1": ["男", "女"],
      phone: /^1[34578]\d{9}$/,
      email: "@email",
      address: "@county(true)",
      birthday: "@date",
    },
  ],
});

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
        data: userList,
      };
    },
  },
];
