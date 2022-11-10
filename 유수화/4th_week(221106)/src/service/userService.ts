import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async ( name : string , email : string, age : number) => {
    const data = await prisma.user.create({
        data : {
            userName : name,
            age : age,
            email : email

        },
    });

    return data;
};

const getUserById = async (userId : number) => {
    const data = await prisma.user.findUnique({
        where : {
            id : userId
        }
    });

    return data;
};

const getAllUser = async () => {
    const data = await prisma.user.findMany();
    return data;
};

const updateUser = async ( userId : number, username : string) => {
    const data = await prisma.user.update({
        where:{
            id : userId
        },
        data : {
            userName : username
        }
    });

    return data;
};

const deleteUser = async ( userId : number) => {
    const data = await prisma.user.delete({
        where : {
            id : userId
        }
    });

};

const userService = {
    createUser,
    getUserById,
    getAllUser,
    updateUser,
    deleteUser,
};

export default userService;