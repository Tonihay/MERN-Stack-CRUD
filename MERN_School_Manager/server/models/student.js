import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({ //creating schema
regNo: Number,
studentName: String,
grade: String,
section: {
    type : String,
    default : 'A'
}


});

const student = mongoose.model('student' , studentSchema); // creating a model with studentSchema

export default student;