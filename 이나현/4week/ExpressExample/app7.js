// Express 기본 모듈 불러오기
var express = require('express'),
    http = require('http'),
    path = require('path');

var bodyParser = require('body-parser'),
    static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 호출됨');
    var userAgent = req.header('User-Agent')
    var paramid = req.body.id 

   res.send('<h3>서버에서 응답하였습니다. USer-Agent ->' + userAgent + '</h3> <h3>Param Id ->' + paramId+ '</h3>');
});


