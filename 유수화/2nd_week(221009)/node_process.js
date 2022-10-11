const process = require('process');

console.log(process.execPath); //현재 프로세스가 실행되는 경로 : 현재 실행되는 노드위 위치
console.log(process.version); //현재 프로세스(node)가 실행되는 버전 
console.log(process.pid); //프로세스 아이디
console.log(process.ppid); //프로세스 부모 아이디
console.log(process.platform);
console.log(process.env); //현재 컴퓨터에 저장된 환경변수에 대한 모든 정보들
console.log(process.uptime()); //얼마나 실행되고 있었는지
console.log(process.cwd()); //현재 실행중인 노드 경로(js파일)
console.log(process.cpuUsage());
console.log(process.argv); //노드 실행파일, 현재 실행파일 두개의 파라미터생김
console.log(process.argv.length);

setTimeout(()=>{
    console.log('setTimeout');
},0); //현재 코드 다 수행되고, 0초후에 setTimeout에 넣어준 콜백함수를 수행

process.nextTick(()=>{
    console.log('nextTick');
});// 지금은 당장말고 현재수행되는 코드가 다 완료된 다음 내가 등록한 콜백을 task queue에 넣어주는 함수, 이미 taskqueue에 다른 작업이 있어도 큐의 가장 앞에 넣어줌

for(let i =0; i<1000;i++){
    console.log('for loop');
};