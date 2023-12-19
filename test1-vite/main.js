import { count } from "./counter.js";
import _ from "lodash";
import "@assets/luoyang.jpg";

import lodashES from "lodash-es";
// console.log(_);

// 获取当前所处的代码环境
// console.log(import.meta.env);
// console.log(count([1, 2, 3]));
fetch("/api/users", { method: "post" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
