"use strict";

// 모듈
const express = require("express");

const POST = 3000;
const app = express();


app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
const home = require("./routes/home");
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

app.listen(POST,function(){
    console.log("서버가동");
});