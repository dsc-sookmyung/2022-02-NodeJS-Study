var express = require('express'),
    http = require('http');

var app = express();

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');

    next();
});

app.use('/', function(req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함.');

    res.redirect('http://google.co.kr');
})

