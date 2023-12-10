import { Request, Response } from "express";

import Student from "../models/Student";

const createStudent = (req: Request, res: Response) => {
  const { studName, email, courseEnrolled } = req.body;

  const student = new Student({
    studName,
    email,
    courseEnrolled,
  });

  return student
    .save()
    .then((student) => res.status(200).json({ student, message: "Saved" }))
    .catch((err) => res.send(500).json({ err, message: "Couldn't save" }));
};

const readStudent = (req: Request, res: Response) => {
  const studName = req.params.studName;

  return Student.findById(studName)
    .then((student) =>
      student
        ? res.status(200).json({ student, message: "Found" })
        : res.status(404).json({ message: "Not Found" })
    )
    .catch((error) => res.status(500).json({ error, message: "Not Found" }));
};

const readAll = (req: Request, res: Response) => {
    return Student.find()
        .then((students) => res.status(200).json({ students }))
        .catch((error) => res.status(500).json({ error }));
};

const deleteStudent = (req: Request, res: Response) => {
    const studName = req.params.studName;

    return Student.findByIdAndDelete(studName)
        .then((student) => (student ? res.status(201).json({ student, message: 'Deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

const updateStudent = (req: Request, res: Response) => {
    const studName = req.params.studName;

    return Student.findById(studName)
        .then((student) => {
            if (student) {
                student.set(req.body);

                return student
                    .save()
                    .then((student) => res.status(201).json({ student }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

export default { createStudent, readAll, readStudent, updateStudent, deleteStudent }