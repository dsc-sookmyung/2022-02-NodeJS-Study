//async & await
//clear style of using promise

//1.async
async function fetchUser(){
    //do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(reolve, ms));
}

async function getApple(){
    await delay(1000);//딜레이가 끝날 때까지 대기
    return '🍎';
}

async function getBanana(){
    await delay(2000); //딜레이가 끝날 때까지 대기
    return '🍌';
}

/** 
 //콜백 지옥...
function picjFruits(){
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
**/

/**
//await가 순차적으로 실행되어 시간이 효율적이지 않다
async function picjFruits(){
    try{
    const apple = await getApple();
    const banana = await getBanana();
    }catch(){

    }
    return `${apple} + ${banana}`;
}
**/

//await 병렬처리
async function picjFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

//배열안의 함수가 모두 완료될 때까지 대기
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

//배열의 함수 중 빨리 완료되는 함수의 값만 리턴
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]); 
}