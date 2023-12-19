// import _ from "lodash";
import "./src/imageLoader.js";

// console.log("lodash", _);
import { count } from "./counter.js";
// import "../request.js";
console.log(count([1, 2]));

fetch("/api/users", {
  method: "post",
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
