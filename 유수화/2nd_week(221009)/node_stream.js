const fs =require('fs');


//stream 기능을 통해 여러 작업들을 한번에 읽ㅓ오지 않고,버퍼별로 읽고 쓰고를 반복하며 데이터를 순차적으로 처리 가능
//on api는 자기자신을 리턴해서 chaining가능 
//once : 딱한번만 출력됨 ex. 이 경우 on이 아니라 once를 썼다면 처음 chuck만 출력됨

fs.createReadStream('./file.txt',{
    highWaterMark :8,
    encoding : 'utf-8',
})
.once('data',(chuck)=>{
    console.log(chuck);
    console.count('data');
})
.on('end',()=>{
    console.log('readStream is END.');
    console.log('YAP');
})
.on('error',(err)=>{
    console.error(err);
});