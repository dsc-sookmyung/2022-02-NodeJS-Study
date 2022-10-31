/**
 * 계산기 객체를 모듈로 만들어 보기
 */
var Calc = require('./calc3');

var calc1 = new Calc();

calc1.emit('stop');

console.log('Calc 에 stop 이벤트 전달함.');