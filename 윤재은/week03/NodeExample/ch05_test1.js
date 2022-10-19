const http = require('http');

const server = http.createServer();

const host = 'localhost';
const port = 3000;
server.listen(port, host, '50000', function() {
    console.log(`${port} 포트에서 ${host} 호스트로 웹서버가 실행되었습니다.`);
});