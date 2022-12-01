const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456"; // 암호화할 때 사용하는 초기화 벡터

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("암호화할 문장", "utf8", "base64"); // 문자열, 인코딩, 출력 결과물의 인코딩
result += cipher.final("base64"); // 출력 결과물의 인코딩 => 암호화 완료
console.log("암호화:", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf8"); // 문자열, 인코딩, 복호화할 인코딩
result2 += decipher.final("utf8"); // 복호화 결과물의 인코딩 => 복호화 완료
console.log("복호화:", result2);
