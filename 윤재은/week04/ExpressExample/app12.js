const express = require('express');
const http = require('http');
const static = require('serve-static'); //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할을 
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const expressSession = require('express-session');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

const router = express.Router();

router.get('/process/product', function(req, res){
    console.log('/process/product 라우팅 함수 호출');
    if (req.session.user){
        res.redirect('/public/product.html');
    }else{
        res.redirect('/public/login2.html');
    }
});

router.post('/process/login', function(req, res){
    console.log('/process/login 라우팅 함수 호출');

    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;
    console.log(`요청 파라미터: ${paramId}, ${paramPassword}`);

    if(req.session.user){
        console.log('이미 로그인 되어있습니다.');
        res.redirect('/public/product');
    }else{
        req.session.user = {
            id:'mike',
            name:'소녀시대',
            authorized:true
        };
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.write('<h1>로그인 성공</h1>');
        res.write(`<p>Id: ${paramId}</p>`);
        res.write('<br><br><a href="/public/product">상품페이지로 이동하기</a>');
        res.end();
    }
});

router.get('/process/logout', function(req, res){
    console.log('/process/logout 라우팅 함수 호출');
    if (req.session.user){
        console.log('로그아웃합니다.');
        req.session.destroy(function(err){
            if (err){
                console.log(`세션 삭제 시 에러 발생`);
                return;
            }
            console.log('세션 삭제 성공');
            res.redirect('/public/login2.html');
        });
    }else{
        console.log('로그인이 되어 있지 않습니다.');
        res.redirect('/public/login2.html');
    }
});

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
