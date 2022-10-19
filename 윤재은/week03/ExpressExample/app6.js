const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출');
    
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;

    res.send('<h3>서버에서 응답. userAgent : ' + userAgent + '  paramName: '+ paramName +'</h3>')
});

const server = http.createServer(app).listen(app.get('port'), function(){
    console.log(`익스프레스로 웹 서버를 실행 ${app.get('port')}`);
});



