console.log('argv 속성의 파리미터 수 : ' + process.argv.length);
console.dir(process.argv); //파일을 실행할 떄 2개의 파라미터가 사용된다.

process.argv.forEach((item, index) => {
    console.log(`${index} : ${item}`);
});