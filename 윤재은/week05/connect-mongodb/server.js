const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv').config({path:'variables.env'});

const MONGODB_URL = process.env.MONGODB_URL;

const server = express();

server.get('/', (req, res)=>{
    const newUser = new User();
    newUser.email = "123@gmail.com";
    newUser.name = "jaeeun";
    newUser.age = 23;
    newUser
        .save()
        .then((user)=>{
            console.log(user);
            res.json({
                Message: 'User Created Successfully'
            });
        })
        .catch((err)=>{
            res.json({
                message:err.toString()
            });
        });
});

server.listen(3000, (err)=>{
    if (err){
        console.log(err);
    }else{
        mongoose.connect(MONGODB_URL, {useNewUrlParser: true}, (err)=>{
            if (err){
                console.log(err);
            }else{
                console.log("Connect to database successfully");
            }
        });
    }
});



