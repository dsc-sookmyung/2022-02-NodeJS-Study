let calc={};

calc.add=function(a,b){
    return a+b;
}

console.log('모듈로 분리하기전 -calc.add : '+calc.add(10,10));