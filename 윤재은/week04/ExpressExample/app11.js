const express = require('express');
const http = require('http');
const static = require('serve-static'); //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할을 
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());

const router = express.Router();

router.get('/process/setUserCookie', function(req, res){
    console.log('/process/setUserCookie 라우팅 함수 호출');
    res.cookie('user', {
        id:'mike',
        name:'소녀시대',
        authorized:true
    });
    res.redirect('/process/showCookie');
});

router.get('/process/showCookie', function(req, res){
    console.log('/process/showCookie 라우팅 함수 호출');
    res.send(req.cookies);
});

app.use('/', router);

app.all('*', function(req, res){ //최하단에 위치
    res.status(404).send('<h1>요청하신 페이지가 없습니다.</h1>');
});

const server = http.createServer(app).listen(app.get('port'), function(){
    console.log(`익스프레스로 웹 서버를 실행 ${app.get('port')}`);
});
