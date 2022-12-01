const checkNumber = require("./func");
const { odd, even } = require("./var");

function checkStrOddorEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStrOddorEven("hello"));
console.log(module.exports === exports); // true
