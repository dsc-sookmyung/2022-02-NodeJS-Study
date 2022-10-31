const Calc = require('./calc3');

const Calc1 = new Calc();
Calc.emit('stop');

console.log('Calc에 stop 이벤트 전달함');