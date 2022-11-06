var express = require('express'),
    http = require('http');

var app = express();

app.set('port',process.env.PORT||3000);

app.use(function(req,res,next) {
    console.log('첫번째 미들웨어 호출됨.');
    
    var userAgent = req.header('USer-Agent');
    var paramName = req.query.name;
    
    res.send('<h3>서버에서 응답하였습니다. USer-Agent ->'+userAgent+'</h3>');
});

var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함:'+app.get('port'));
});
