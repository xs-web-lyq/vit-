import luoyang from "@assets/luoyang.jpg?url";
// 服务端会读取这个图片内容 ----> buffer 二进制字符串 raw

console.log("louyang", luoyang);

const img = document.createElement("img");
img.src = luoyang;
img.style.width = "100px";
document.body.append(img);
