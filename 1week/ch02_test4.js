var calc ={};
calc.add =function(a,b){
  return a+b;  
};

console.log('모듈로분리하기전-calc.add:' +calc.add(10,10));