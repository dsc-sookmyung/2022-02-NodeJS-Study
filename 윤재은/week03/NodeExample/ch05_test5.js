const http = require('http');
const fs = require('fs');

const server = http.createServer();

const host = 'localhost';
const port = 3000;

server.listen(port, host, '50000', function() {
    console.log(`웹서버가 실행되었습니다.`);
});

server.on('connection', function() {
    console.log('클라이언트가 접속했습니다.');
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');

    const filename = 'house.png';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type": "image.png"});
        res.write(data);
        res.end();
    });
});