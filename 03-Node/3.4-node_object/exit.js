let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log("종료!");
    process.exit(); // 정상 종료 = 0 또는 없음 / 비정상 종료: 1
  }
  console.log(i);
  i += 1;
}, 1000);
