import { Router } from "express";
import mediaRouter from "./mediaRouter";


const router : Router = Router();

router.use("/media",mediaRouter);


export default router;




