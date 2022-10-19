const url = require('url');
const urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=sookmyung';

const curUrl = url.parse(urlStr); //url을 객체로 리턴

console.log(curUrl);

console.log(`query -> ${curUrl.query}`);

const curStr = url.format(curUrl); //원본의 문자열 주소로 만듬
console.log(`url -> ${curStr}`);

const querystring = require('querystring');
const params = querystring.parse(curUrl.query);
console.log(`검색어 -> ${params.query}`);