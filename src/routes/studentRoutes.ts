const { Router } = require("express");
import { Request,Response } from "express";
import studentController from "../controllers/studentController";

const router = Router();

router.get('/', (req:Request, res:Response) => {
    studentController.readAll(req, res);
  });
  

router.post("/", (req:Request, res:Response) => {
  studentController.createStudent(req,res);
});

router.get("/:studName", (req:Request, res:Response) => {
  studentController.readStudent(req,res);
});

router.delete("/:studName", (req:Request, res:Response) => {
  studentController.deleteStudent(req,res);
});

router.patch("/:studName", (req:Request, res:Response) => {
  studentController.updateStudent(req,res);
});

export = router;
