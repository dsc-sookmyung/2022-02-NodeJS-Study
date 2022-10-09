const fs = require('fs');
const buf=Buffer.from('Hi'); //'Hi' 문자열을 실제로 메모리에 올릴때 어떤식으로 저장되는지 볼 수 있음

console.log(buf); //unicode 형태로 출력됨
console.log(buf.length);
console.log(buf[0]); //배열에 있는 형식으로 출력은 아스키코드형식
console.log(buf[1]);
console.log(buf.toString()); //encoding 전달가능


// 버퍼를 만들 수도있음
const buf2=Buffer.alloc(2); //size 2 인 버퍼 만듬 : 메모리에서 사용가능한 2바이트 공간을 찾아 초기화시켜 버퍼로 씀
//Allocates a new Buffer of size bytes. If fill is undefined, theBuffer will be zero-filled.
const buf3=Buffer.allocUnsafe(2); //size 2 인 버퍼 만듬 : 메모리에서 사용가능한 2바이트 공간을 찾아 초기화시키지 않고 버퍼로 씀, 좀더 속도 빠름
buf2[0]=72;
buf2[1]=105;
console.log(buf2);
console.log(buf2.toString());
buf2.copy(buf3); //buf2 내용은 buf3로 카피해옴
console.log(buf3);


//concat : 여러 버퍼 모을 수 있음
const newBuf=Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());