const fs = require('fs');

//파일을 다 읽을 때까지 대기. 동기
const data = fs.readFileSync('./package.json', 'utf8');
console.log(data);


