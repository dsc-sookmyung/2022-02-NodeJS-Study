const calc = {};

calc.add = function(a, b) {
    return a + b;
};

console.log(`모듈을 분리하기 전 - calc.add: ${calc.add(10, 10)}`);