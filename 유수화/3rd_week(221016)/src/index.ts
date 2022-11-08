import express, { NextFunction, Request, Response } from "express";
import {router} from "./api";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", router);

app.listen(PORT,()=>{
    console.log(`*****************************************
     ${PORT}번 포트에서 듣고 있는 중~~*
    ********************************************`);
    
});