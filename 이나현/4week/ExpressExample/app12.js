var express = require('express'),
    http = require('http'),
    path = require('path');

var bodyParser = require('body-parser'),
    static = require('serve-static');


var cookieParser = require('cookie-parser');
var expressSession = require('express-session');


var app = express();






app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));

var router = express.Router();

router.route('/process/product').get(function(req, res) {
    console.log('/process/product 라우팅함수 호출');

    if (req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/login2.html');
    }
});

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 처리함');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if (req.session.user) {
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');


        res.redirect('/public/product.html');
    } else {
        req.session.user = {
            id: paramId,
            name: '소녀시대',
            authorized: true
        };

    }

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>로그인 성공.</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>ParamPassword : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/product.html'>상품 페이지로 돌아가기</a>");
    res.end();
});

router.route('/process/logout').get(function(req, res) {
    console.log('/process/logout is called');

    if (req.session.user) {
        console.log('로그아웃합니다.');

        req.session.destroy(function (err) {
            if (err) throw err;

            console.log('세션을 삭제하');
            res.redirect('/public/login2.html');
        });
    } else {
        console.log('로그인되어 있지 않습니다.');

        res.redirect('/public/login2.html');
    }
});

router.route('/process/users/:id').get(function(req, res) {
    console.log('/progress/users/:id 처리함');

    var paramId = req.params.id;

    console.log('/process/users와 토큰 %s를 이용해 처리함', paramId);

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param Id : ' + paramId + '</p></div>');
    res.end();
});

router.route('/process/setUserCookie').get(function(req, res) {
    console.log('/process/setUserCookie 호출됨');

    res.cookie('user', {
        id: 'mike',
        name: '소녀시대',
        authorized: true
    });

    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie is called');

    res.send(req.cookies);
})



app.use('/', router);