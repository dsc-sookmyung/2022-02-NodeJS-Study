const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app).listen(app.get('port'), function(){
    console.log(`익스프레스로 웹 서버를 실행 ${app.get('port')}`);
});



