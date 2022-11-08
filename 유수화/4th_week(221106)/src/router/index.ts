import  { Router } from "express";
import userRouter from "./userRouter";
//userRouter에서는 router로 내보냈지만 Name을 userRouter로 바꿈

const router : Router = Router();

router.use("/user",userRouter);

export default router;