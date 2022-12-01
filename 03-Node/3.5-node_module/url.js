const url = require("url");

const { URL } = url;
const myURL = new URL("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor");
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("---------------------");

// 주소 분해
const parsedUrl = url.parse("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor");
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl)); // 분해된 객체를 다시 조립
console.log("---------------------");

const myURL2 = new URL("http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript");
console.log("searchParams:", myURL2.searchParams);
console.log("searchParams.getAll():", myURL2.searchParams.getAll("category")); // 키에 해당하는 모든 값
console.log("searchParams.get():", myURL2.searchParams.get("limit")); // 키에 해당하는 첫 번재 값
console.log("searchParams.has():", myURL2.searchParams.has("page")); // 해당 키의 유무

console.log("searchParams.keys():", myURL2.searchParams.keys());
console.log("searchParams.values():", myURL2.searchParams.values());

myURL2.searchParams.append("filter", "es3"); // 해당 키를 추가 (같은 키의 값이 있다면 유지)
myURL2.searchParams.append("filter", "es5");
console.log(myURL2.searchParams.getAll("filter"));

myURL2.searchParams.set("filter", "es6"); // 같은 키의 값들을 모두 지우고 새로 추가
console.log(myURL2.searchParams.getAll("filter"));

myURL2.searchParams.delete("filter");
console.log(myURL2.searchParams.getAll("filter"));

console.log("searchParams.toString():", myURL2.searchParams.toString()); // 조작한 객체를 다시 문자열로
myURL2.search = myURL2.searchParams.toString();
