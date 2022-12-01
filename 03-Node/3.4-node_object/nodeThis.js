console.log(this); // {}
console.log(this === module.exports); // true
console.log(this === exports); // true
function whatisThis() {
  console.log("function", this === exports, this === global);
}
whatisThis(); // function false true
