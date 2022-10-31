/**
 * 파일을 읽어 들이거나 파일에 쓰기
 */
// 파일 시스템 모듈 호출
var fs = require('fs');

// 파일을 동기식 IO로 읽어 들입니다.
var data = fs.readFileSync('./package.json', 'utf8');

// 읽어 들인 데이터 출력
console.log(data);