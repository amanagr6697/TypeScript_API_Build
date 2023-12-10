import mongoose, { Document, Schema } from 'mongoose';
const { isEmail } = require('validator');

export interface IStudent {
    courseName: string;
    proffesor?: string; 
    rating?: number;
}

export interface IStudentModel extends IStudent, Document {}

const studentSchema: Schema = new Schema({
    studName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
      },
    courseEnrolled:{
        type: String,
        required: true
    }
});

export default mongoose.model<IStudentModel>('Student', studentSchema);

