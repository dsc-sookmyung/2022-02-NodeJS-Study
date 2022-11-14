import { Request, Response } from "express";
import { detailInter } from "../interface/detailInter";
import { mediaService } from "../service";
import { Prisma, PrismaClient } from "@prisma/client";

//CRUD


//C : 넷플릭에 미디어 컨텐츠 추가
const createMedia = async (req : Request, res : Response) => {
    const { title, thumbnail, length, 
        quality, seriesNum, actors, createYear,
        age, genre, character, summary} = req.body;

    //예외 1 : 필요한 정보(title, length, quality ~ summary)가 안들어왔을때
    if ( !title || !length || !quality 
        || !seriesNum || ! actors || !createYear 
        || !age || !genre || !character || !summary){
            return res.status(400).json({
                status : 400,
                message : "컨텐츠를 추가하기위한 정보가 부족하다."
            })

    }

    const mediaInfo : detailInter = {
        title : title,
        mediaInfo : {
            thumbnail : thumbnail,
            length : +length,
            quality : quality,
            seriesNum : +seriesNum,
            age : +age
        },
        contentInfo : {
            createYear : createYear,
            actors : actors,
            genre : genre,
            character : character,
            summary : summary
        }
    }
    
    const createdMedia = await mediaService.createMedia( mediaInfo);
    //예외 2 : 같은 이름의 컨텐츠가 있음

    if (!createdMedia || createdMedia instanceof Prisma.PrismaClientKnownRequestError){
        return res.status(409).json({
            status : 409,
            message : `해당 ${title} 컨텐츠는 이미 존재합니다.`
        }); 
    }
    //성공 : 잘 만들어짐
    return res.status(201).json({
        status : 200,
        message : "만들기ok",
        data : createdMedia
    })
}

//R
// 전체 미디어 목록 조회
const getAllMedia = async (req : Request, res : Response) => {
    const mediaList = await mediaService.getAllMedia();

    return res.status(200).json({
        status : 200,
        message : "전체조회ok",
        data : mediaList
    })

}

// 미디어 목록 하나조회 - detail
const getMediaDetail = async (req : Request, res : Response) => {
    const { mediaId } = req.params;
    
    // 예외 1. 미디어 아이디 오류
    if (!mediaId || isNaN(+mediaId)){
        return res.status(400).json({
            status : 400,
            message : `${mediaId}는 유요한 아이디가 아닙니다.`
        })
    }

    const mediaDetail = await mediaService.getMediaDetail(+mediaId);

    //예외 2. 해당 미디어 아이디가 없는경우
    if (!mediaDetail || mediaDetail instanceof Prisma.PrismaClientKnownRequestError){
        return res.status(400).json({
            status : 400,
            message : `조회 실패 : 아이디 ${mediaId}의 데이터가 없습니다.`,
        })
    }
    return res.status(400).json({
        status : 400,
        message : `${mediaId}하나조회ok`,
        data : mediaDetail
    })

}

// U : 미디어 컨텐츠 정보 변경

const updateMedia = async (req : Request, res : Response) => {
    const { mediaId } = req.params;
    const { thumbnail, length, 
        quality, seriesNum, actors, createYear,
        age, genre, character, summary} = req.body;
    
    // 예외 1. 미디어 아이디 오류
    if (!mediaId || isNaN(+mediaId)){
        return res.status(400).json({
            status : 400,
            message : `${mediaId}는 유요한 아이디가 아닙니다.`
        })
    }
    const mediaInfo : detailInter = {
        title : "",
        mediaInfo : {
            thumbnail : thumbnail,
            length : +length,
            quality : quality,
            seriesNum : +seriesNum,
            age : +age
        },
        contentInfo : {
            createYear : createYear,
            actors : actors,
            genre : genre,
            character : character,
            summary : summary
            }
        }
    
    const updatedMedia= await mediaService.updateMedia(mediaInfo , +mediaId);

    //예외2 : 해당 미디어 아이디의 데이터가 없는경우
    if (!updatedMedia || updatedMedia instanceof Prisma.PrismaClientKnownRequestError){
        return res.status(400).json({
            status : 400,
            message : `업데이트실패 : 아이디 ${mediaId}의 데이터가 없습니다.`,
        })
    }
    return res.status(200).json({
        status : 200,
        message : `아이디 ${mediaId } 업데이트ok`,
        data : updatedMedia
    })

}

// D : 미디어 정보 삭제
const deleteMedia = async (req : Request, res : Response) => {
    const { mediaId } = req.params;

    //미디어 아이디 오류
    if (!mediaId || isNaN(+mediaId) ){
        return res.status(400).json({
            status : 400,
            message : `삭제 실패 : 아이디 ${mediaId}가 유효하지 않습니다.`,
        })

    } 
    
    const deletedMedia = await mediaService.deleteMedia(+mediaId);
    
    //미디어 삭제할 데이터가 없을때
    if(!deletedMedia || deletedMedia instanceof Prisma.PrismaClientKnownRequestError ){
        return res.status(400).json({
            status : 400,
            message : `삭제 실패 : 아이디 ${mediaId}의 데이터가 없습니다.`,
        }); 
    }
    else{
        return res.status(200).json({
            status : 200,
            message : `${mediaId}삭제ok`,
            data : deletedMedia
        });
    }


}

const mediaController={
    createMedia,
    getAllMedia,
    getMediaDetail,
    updateMedia,
    deleteMedia

};

export default mediaController;


