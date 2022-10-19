const fs = require('fs');

//파일을 다 읽을 때까지 대가하지 않고 다음 코드를 실행. 비동기
fs.readFile('./package.json', 'utf8', function(err, data){
    console.log(data);
});