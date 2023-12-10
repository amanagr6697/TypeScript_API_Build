import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse {
    courseName: string;
    proffesor?: string; 
    rating?: number;
}


export interface ICourseModel extends ICourse,Document {}

const courseSchema: Schema = new Schema({
    courseName: {
        type: String,
        required: true,
    },
    proffesor: {
        type: String,
    },
    rating: {
        type: Number,
    },
});

export default mongoose.model<ICourseModel>('Course', courseSchema);
