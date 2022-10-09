const EventEmitter =require('events'); //직접 이벤트를 등록해서 발생시키는 커스텀도 가능

const emitter = new EventEmitter(); //이벤트를 등록-발생 시킬수있는 객체 생성

//등록한 콜백함수 중지도 가능
const callback3=(args)=>{
    console.log('third callvack-',args,'\n');
};


emitter.on('suhwa',(args)=>{ //이벤트객체에 '태그'로 이벤트 발생시 동작 코드를 설정
    console.log('first callback - ',args);
});

emitter.on('suhwa',(args)=>{
    console.log('second callback - ',args);
});

emitter.on('suhwa',callback3);


emitter.emit('suhwa', {message : 1}); //event 발생 -> 하나의 이벤트 태그('suhwa')에 등록된 모든 함수들 출력
emitter.emit('suhwa', ['bori : dog']);
emitter.removeListener('suhwa',callback3); //'suhwa'라는  event에 등록된 콜백함수를 제거하겠다
emitter.removeAllListeners(); //이벤트 명시안하면 모든 이벤트에대한 콜백지움
emitter.emit('suhwa', {message : 3}); //이미 이벤트에 대한 동작(콜백)을 지워서 발생시켜도 아무것도 없음