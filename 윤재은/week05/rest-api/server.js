const express = require('express');
const bodyParser = require('body-parser'); //request body에서 파라미터 추출

const server = express();

server.use(bodyParser.json());

const users = [
    {
    id:'123',
    name:'jaeeun',
    email:'123@gmail.com'
    },{
    id:'1234',
    name:'jaeeun2',
    email:'1234@gmail.com'
    }
];

server.get("/api/user", (req, res)=>{
    res.json(users);
});

server.get("/api/user/:id", (req, res)=>{
    const user = users.find((u)=>{
        return u.id === req.params.id;
    });
    if(user){
        res.json(user);
    }else{
        res.status(404).json({errorMessage:'User was not Found'});
    }
});

server.post("/api/user", (req, res) =>{
    users.push(req.body);
    res.json(users);
});

server.put('/api/user/:id',  (req, res)=>{
    let foundIndex = users.findIndex((u)=>{
        return u.id === req.params.id;
    });
    if(foundIndex === -1){
        res.status(404).json({errorMessage:'User was not Found'});
    }else{
        users[foundIndex] = {...users[foundIndex], ...req.body}; //...=> 값을 복사한다.
        res.json(users[foundIndex]);
    }
});

server.delete('/api/user/:id',  (req, res)=>{
    let foundIndex = users.findIndex((u)=>{
        return u.id === req.params.id;
    });
    if(foundIndex === -1){
        res.status(404).json({errorMessage:'User was not Found'});
    }else{
        let foundUser = users.splice(foundIndex, 1); //인덱스를 시작으로 한칸을 지우고 지운 값을 리턴
        res.json(foundUser[0]); //지워진 값
    }
})

server.listen(3000, ()=>{
    console.log('The Server is runing');
});