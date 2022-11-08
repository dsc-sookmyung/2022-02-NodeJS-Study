import express, {  Request, Response, Router } from "express";
import { mediaRouter } from "./media";
export const router : Router = express.Router();

router.use("/media",mediaRouter);




