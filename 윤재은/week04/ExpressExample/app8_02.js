const express = require('express');
const http = require('http');
const static = require('serve-static'); //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할을 
const path = require('path');
const bodyParser = require('body-parser'); 

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const router = express.Router();


router.post('/process/login/:name', function(req, res){
    console.log('/process/login/:name 라우팅 함수에서 받음.');
    const paramName = req.params.name;

    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write(`<div><p>${paramName}</p></div>`);
    res.write(`<div><p>${paramId}</p></div>`);
    res.write(`<div><p>${paramPassword}</p></div>`);
    res.end();
});

app.use('/', router);

const server = http.createServer(app).listen(app.get('port'), function(){
    console.log(`익스프레스로 웹 서버를 실행 ${app.get('port')}`);
});
