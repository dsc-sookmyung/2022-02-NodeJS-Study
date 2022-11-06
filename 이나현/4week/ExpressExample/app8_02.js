// Express 기본 모듈 불러오기
var express = require('express'),
    http = require('http'),
    path = require('path');

// Express 미들웨어 불러오기
var bodyParser = require('body-parser'),
    static = require('serve-static');

// 익스프레스 객체 생성
var app = express();

var router = express.Router();

router.route('/process/login/:name').post(function(req, res) {
    console.log('/process/login/:name 처리했습니다');

    var paramName = req.params.name;

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>ParamPassword : ' + paramPassword + '</p></div>');
    res.end();
})

app.use('/', router);

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 호출됨');
    var userAgent = req.header('User-Agent')
    var paramid = req.body.id 

   res.send('<h3>서버에서 응답하였습니다. USer-Agent ->' + userAgent + '</h3> <h3>Param Id ->' + paramId+ '</h3>');
});
