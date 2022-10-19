const path = require('path');

const directories = ['Users', 'Mars', 'docs'];
const dirStr = directories.join(); //배열의 원소가 ','를 기준으로 합쳐진다
console.log(`dir : ${dirStr}`);

const dirStr2 = directories.join(path.sep); //구분자를 지정
console.log(`dir2 : ${dirStr2}`); 

const filepath = path.join('/Users/Mars', 'notepad.exe'); //가장 많이 쓰는 방법
console.log(`dir3 : ${filepath}`); 

const dirname = path.dirname(filepath); //파일명을 제외한 폴더 경로
console.log(`dirname : ${dirname}`);
const basename = path.basename(filepath); //파일 이름
console.log(`basename : ${basename}`);
const extname = path.extname(filepath); //확장자
console.log(`extname : ${extname}`);
