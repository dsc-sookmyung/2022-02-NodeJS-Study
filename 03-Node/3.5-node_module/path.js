const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep); // 경로 구분자
console.log("path.delimiter:", path.delimiter); // 환경변수 구분자
console.log("-------------------------");

console.log("path.dirname():", path.dirname(string)); // 파일이 위치한 폴더 경로
console.log("path.extname():", path.extname(string)); // 파일 확장자
console.log("path.basename():", path.basename(string)); // 파일의 이름 (확장자 포함)
console.log("path.basename - extname:", path.basename(string, path.extname(string)));
console.log("-------------------------");

console.log("path.parse():", path.parse(string)); // 파일 경로를 root, dir, base, ext, name으로 분리
console.log(
  "path.format():",
  path.format({
    dir: "C:work\\2022-02-NodeJS-Study\\03-Node\\3.5-node_module",
    name: "path",
    ext: ".js",
  })
); // path.parse한 객체를 파일 경로로 합침
console.log("path.normalize():", path.normalize("C://users\\\\mjkim\\path.js")); // 정상적인 경로로 변환
console.log("--------------------------");

console.log("path.isAbsolute(C:\\): ", path.isAbsolute("C:\\")); // 절대경로이면 true, 상대경로이면 false
console.log("path.isAbsolute(./home): ", path.isAbsolute("./home"));
console.log("--------------------------");

console.log("path.relative(): ", path.relative("C:\\users\\mjkim\\path.js", "C:\\")); // 첫번째 경로에서 두번째 경로로 가는 법
console.log("path.join():", path.join(__dirname, "..", "..", "/users", ".", "/mjkim")); // 하나의 경로로 합침
console.log("path.resolve():", path.resolve(__dirname, "..", "/users", ".", "/mjkim"));
