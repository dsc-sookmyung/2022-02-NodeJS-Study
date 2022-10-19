const fs = require('fs');

fs.writeFile('./output.txt', 'Hello.', function(err){
    if (err){
        console.log(`에러 발생 ${error}`);
        return;
    }
    console.log('output.txt 파일에 쓰기 완료함.');
});