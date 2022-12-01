const crypto = require("crypto");

// createHash: 사용할 해시 알고리즘
// update(문자열): 변환할 문자열
// digest(인코딩): 인코딩할 알고리즘
console.log("base64:", crypto.createHash("sha512").update("비밀번호").digest("base64"));
console.log("hex:", crypto.createHash("sha512").update("비밀번호").digest("base64"));
console.log("base64:", crypto.createHash("sha512").update("다른 비밀번호").digest("base64"));

// pbkdf2 알고리즘으로 비밀번호 암호화
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password:", key.toString("base64"));
  });
});
