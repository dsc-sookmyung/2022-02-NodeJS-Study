const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체 시간"); // time과 timeEnd 사이의 시간 측정
console.log("평범한 로그");
console.log(string, number, boolean);
console.error("에러 메시지");
// 배열의 요소로 객체 리터럴을 넣으면 객체의 속성들이 테이블로 표시됨
console.table([
  { name: "제로", birth: 1994 },
  { name: "hero", birth: 1988 },
]);
// console.dir(객체, 옵션)
// colors: 콘솔에 색 추가, depth: 객체 안의 객체 표시할 단계 (default: 2)
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}

function a() {
  b();
}
a();

console.timeEnd("전체 시간");
