const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출');
    req.user = 'mike';
    next();
});

app.use(function(req, res, next){
    console.log('두번째 미들웨어 호출');
    //res.send('<h1>서버에서 응답한 결과 : '+ req.user +'</h1>');
    
    const person = {name:'jaeeun', age:23};
    //res.send(person);

    const personStr = JSON.stringify(person);
    //res.send(personStr);

    res.writeHead(200, {"Content-Type":"application/json;charset=utf8"});
    res.write(personStr);
    res.end();
});

const server = http.createServer(app).listen(app.get('port'), function(){
    console.log(`익스프레스로 웹 서버를 실행 ${app.get('port')}`);
});



