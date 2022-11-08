import { Router } from "express";
import { userController } from "../controller";

const userRouter : Router = Router();

//CRUD
//C
userRouter.post("/", userController.createUser);

//R
//전체조회
userRouter.get("/", userController.getAllUser);
//한명씩 조회
userRouter.get("/:userId", userController.getUserById);

//U
userRouter.patch("/:userId", userController.updateUser);

//D
userRouter.delete("/:userId", userController.deleteUser);



export default userRouter; //router로 내보냄