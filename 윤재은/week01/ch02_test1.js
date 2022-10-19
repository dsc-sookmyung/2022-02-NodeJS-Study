console.log('안녕하세요');

console.log('숫자입니다. %d', 10);
console.log('문자열입니다. %s', '안녕');

const person = { //var는 호이스팅 안됨
    name: '소녀시대',
    age: 20
};
console.log('자바스크립트 객체입니다. %j', person);
console.dir(person); //객체의 속성 출력


console.time('duration_time'); //시간 측정 시작. 키 값을 인자로 받음
let result = 0;
for (let i = 0; i <10000; i++){
    result += i;
}
console.timeEnd('duration_time'); //시간 측정 끝. 키 값을 인자로 받음

console.log('파일 이름 : %s', __filename);
console.log('패스 : %s', __dirname);

