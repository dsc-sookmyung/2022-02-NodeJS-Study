import express, { NextFunction, Request, Response } from "express";
import router from "./router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", router);

app.get("/",(req : Request, res : Response, next : NextFunction)=>{
    res.send("~~~~~서버서버서버~~~~~");
});

app.listen(PORT,()=>{
    console.log(`
    ###############################
     ~~~~${PORT}번 포트에서 듣는 중~~~~
    ###############################`);
    
});