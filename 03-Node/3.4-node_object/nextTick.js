const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

// 이벤트 루프가 우선적으로 처리
process.nextTick(() => {
  console.log("nextTick");
});

const timeout = setTimeout(() => {
  console.log("timeout");
}, 0);

// resolve된 Promise도 다른 콜백들보다 우선시됨
Promise.resolve().then(() => console.log("promise"));
