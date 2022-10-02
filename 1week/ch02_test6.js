var calc2=require('./calc2');

console.log('모듈로분리한후-calc2.add:' +calc2.add(30,30));


var nconf=require('nconf');
nconf.env();
var value = nconf.get('os');
console.log('os환경변수의 값:'+value);
