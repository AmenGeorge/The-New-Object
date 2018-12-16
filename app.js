//搭建服务器
// 1.导包
const express = require("express");
const router = require("./router");

// 2.配置
const app = express();
// 配置静态资源
app.use("/public", express.static("./public"));
// 配置第三方资源
app.use("/node_modules", express.static("./node_modules"));
app.engine('html', require('express-art-template'));

// 3.配置路由
app.use(router);

// 4.监听端口
app.listen(12348,()=>{
  console.log("run it ---");
});
