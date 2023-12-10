import { Request, Response } from "express";

import Course from "../models/Course";
import Student from "../models/Student";

const createCourse = (req: Request, res: Response) => {
  const { courseName, proffesor, rating } = req.body;

  const course = new Course({
    courseName,
    proffesor,
    rating,
  });

  return course
    .save()
    .then((course) => res.status(200).json({ course, message: "Saved" }))
    .catch((err) => res.send(500).json({ err, message: "Couldn't save" }));
};

const readCourse = (req: Request, res: Response) => {
  const courseName = req.params.courseName;

  return Course.find({ courseName })
    .then((courses) =>
      courses
        ? res.status(200).json({ courses, message: "Found" })
        : res.status(404).json({ message: "Not Found" })
    )
    .catch((error) => res.status(500).json({ error, message: "Not Found" }));
};

const readAll = (req: Request, res: Response) => {
    return Course.find()
        .then((courses) => res.status(200).json({ courses }))
        .catch((error) => res.status(500).json({ error }));
};

const deleteCourse = (req: Request, res: Response) => {
    const courseName = req.params.courseName;

    return Course.findByIdAndDelete(courseName)
        .then((course) => (course ? res.status(201).json({ course, message: 'Deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

const updateCourse = (req: Request, res: Response) => {
    const courseName = req.params.courseName;

    return Course.findById(courseName)
        .then((course) => {
            if (course) {
                course.set(req.body);

                return course
                    .save()
                    .then((course) => res.status(201).json({ course }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const findStudents = (req:Request, res:Response) =>{
    const courseEnrolled = req.params.courseEnrolled;

    return Student.find({ courseEnrolled })
    .then((students) => res.status(200).json({ students, message:"Found" }))
    .catch((error) => res.status(500).json({ error }));
}

export default { createCourse, readAll, readCourse, updateCourse, deleteCourse,findStudents }