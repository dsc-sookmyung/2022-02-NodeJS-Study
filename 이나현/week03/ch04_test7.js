/**
 * 파일을 읽어 들이거나 파일에 쓰기
 */
// 파일 시스템 모듈 호출
var fs = require('fs');

// 파일에 데이터를 씁니다.
fs.writeFile('./output.txt', 'Hello World', function(err) {
    if (err) {
        console.log('에러 발생.');
        console.dir(err);
        return ;
    }
    console.log('output.txt 파일에 데이터 쓰기 완료.')
});

console.log('output.txt 파이에 데이터 쓰기 실행함.');