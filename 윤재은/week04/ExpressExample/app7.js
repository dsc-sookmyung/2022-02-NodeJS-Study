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

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출');
    
    const userAgent = req.header('User-Agent');
    const paramName = req.body.id || req.query.id;

    res.send('<h3>서버에서 응답. userAgent : ' + userAgent + '  paramName: '+ paramName +'</h3>')
});

const server = http.createServer(app).listen(app.get('port'), function(){
    console.log(`익스프레스로 웹 서버를 실행 ${app.get('port')}`);
});
