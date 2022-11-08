import { Request, Response } from "express";
import { userService } from "../service";
 
const createUser = async ( req : Request, res : Response) => {
    const { userName, email, age } = req.body;

    if (!userName || !age){
        return res.status(400).json({
            status : 400,
            message : "유저 생성 실패 : 유저이름 또는 나이가 없습니다."
        });
    }

    if( !email){
        (email as string) = "email없음";
    }
    const data = await userService.createUser(userName, email, age);

    if (!data){
        return res.status(400).json({
            status : 400,
            message : "유저 생성 실패 "
        });
    }
    else{
        return res.status(201).json({
            status : 201,
            message : "유저생성성공",
            data : data,
        });
    }
};

const getUserById = async ( req : Request, res : Response) => {
    const { userId } = req.params;

    const data = await userService.getUserById(+userId);

    if(!data){
        return res.status(404).json({
            status : 404,
            message : "아이디를 가진 유저를 찾을 수 없음"
        });
    }
    else{
        return res.status(200).json({
            status : 200,
            message : `유저 ${userId}를 조회하는데 성공`,
            data
        });
    }

    

};

const getAllUser = async ( req : Request, res : Response) => {
    const data = await userService.getAllUser();

    return res.status(200).json({
        status : 200,
        message : "유저 전체조회 성공",
        data
    });

};

const updateUser = async ( req : Request, res : Response) => {
    const { userId } = req.params;
    const { username } = req.body;

    if (!username){
        return res.status(400).json({
            status : 400,
            message : "유저 업데이트 실패"
        });
    }
    
    const updatedUser = await userService.updateUser(+userId, username);

    if(!updatedUser){
        return res.status(400).json({
            status : 400,
            message : "유저 업데이트 실패"
        });
    }
    else{
        return res.status(200).json({
            status : 200,
            message : "유저 업데이트 성공",
            updatedUser
        });
    }

};

const deleteUser = async ( req : Request, res : Response) => {
    const { userId } = req.params;

   await userService.deleteUser(+userId);
    
    return res.status(200).json({
        status : 200,
        message : `${userId} 번 유저 삭제 성공`
    });


};

const userController={
    createUser,
    getUserById,
    getAllUser,
    updateUser,
    deleteUser,
};

export default userController;