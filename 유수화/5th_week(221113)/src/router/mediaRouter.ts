import { Router, Request, Response } from "express";
import { mediaController } from '../controller';

const mediaRouter : Router = Router();
//CRUD

//C : 넷플릭에 미디어 컨텐츠 추가
mediaRouter.post("/",mediaController.createMedia);
//R
// 전체 미디어 목록 조회
mediaRouter.get("/",mediaController.getAllMedia);

// 미디어 목록 하나조회 - detail
mediaRouter.get("/:mediaId/detail",mediaController.getMediaDetail);

// U : 미디어 컨텐츠 정보 변경
mediaRouter.patch("/:mediaId",mediaController.updateMedia);

// D : 미디어 정보 삭제
mediaRouter.delete("/:mediaId",mediaController.deleteMedia);




export default mediaRouter;
