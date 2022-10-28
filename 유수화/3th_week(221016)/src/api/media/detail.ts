import express, {  Request, Response, Router } from "express";
import { detailInter } from "../../interface/detailInter";

export const detailRouter : Router = express.Router();

detailRouter.get("/", (req : Request, res : Response )=>{
    
    
    const data : detailInter = {
        "title": "마수리남",
        "mediaInfo": {
            "thumbnail": "https://어쩌구저쩌구",
            "length": 62,
            "quality": "HD",
            "seriesNum": 6,
            "age": 18
        },
        "contentInfo": {
            "createYear": 2022,
            "actors": [
                    "황정민",
                    "하정우",
                    "박혜수"
            ],
            "genre": [
                    "액션",
                    "스릴러",
            ],
            "character": "긴장감 넘치는",
            "summary": "어쩌구 저쩌구 긴박감이 넘친다 *^^*",
        },
        "userInfo": {
            "currentTime": 30,
            "isLike": false
        }
    }
    return res.status(200).json(
        {
            "status": 200,
            "message": "미디어 조회 성공",
              "data": data
        }
          
    );

});