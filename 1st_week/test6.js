let YYY = require('./calc2');
console.log('모듈로 분리한 후 -calc2.add : '+YYY.add(30,30));

let nconf=require('nconf');
nconf.env();
let value=nconf.get('OS');
console.log('OS 환경변수의 값 : '+ value);

