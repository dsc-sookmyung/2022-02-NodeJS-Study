async function fetchuser() {
    //do network request in 10 secs..
    return 'naroong';
}

const user = fetchuser();
user.then(console.log);
console.log(user);


function delay(ms){
    return new Promise(resolve=> setTimeout(resolve,ms))
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return '${apple}+${banana}';
}

pickFruits().then(console.log);


function pickAllFruits(){
    return Promise.all([getApple(),getBanana()]).then(fruits=>
        fruits.join('+'));
    
}

pickAllFruits().then(console.log);