import express, {  NextFunction ,Request, Response, Router } from "express";
import { nextTick } from "process";
import { detailRouter } from "./detail";

export const mediaRouter : Router = express.Router();

mediaRouter.get("/",(req : Request, res : Response)=>{
    return res.send("어느작품을 볼건지? 아마 메인페이지가 있을듯?")
});

mediaRouter.use("/:mediaId/detail", (req : Request, res : Response, next)=>{
    let mediaId:String = req.params.mediaId ;
    if (mediaId=='masurinam'){
        next()
    }
    else{
        res.json({
            "컨텐츠이름" : mediaId,
            "message" : `${mediaId}의 세부정보는 아직 준비되지 않았습니다. ㅈㅅ`
        })
    }
},
detailRouter);


//mediaRouter.use("/:mediaId/detail", detailRouter);



//router에 라우터를 연결하는건 .use 에만 가능 : 가능한 이유 use는 모든 http method에 대해 반응할 뿐만아니라 use안의 경로이후의 경로까지 뒤 인자로 넘겨줄수있음
// 따라서 뒤 인자에 router 객체를 넣어 경로를 뒤이어 세분화 가능
