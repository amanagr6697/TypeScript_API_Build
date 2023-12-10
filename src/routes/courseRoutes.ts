const { Router } = require("express");
import { Request,Response } from "express";
import courseController from "../controllers/courseController";

const router = Router();

router.get('/', (req:Request, res:Response) => {
    courseController.readAll(req, res);
  });
  

router.post("/", (req:Request, res:Response) => {
  courseController.createCourse(req,res);
});

router.get("/:courseName", (req:Request, res:Response) => {
  courseController.readCourse(req,res);
});

router.delete("/:courseName", (req:Request, res:Response) => {
  courseController.deleteCourse(req,res);
});

router.patch("/:courseName", (req:Request, res:Response) => {
  courseController.updateCourse(req,res);
});

router.get('/:courseEnrolled/students', (req:Request, res:Response) => {
    courseController.findStudents(req, res);
  });


export = router;
