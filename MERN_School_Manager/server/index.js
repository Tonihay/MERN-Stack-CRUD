import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './routes/student.js';

    
 const app = express();

 app.use(bodyParser.json({limit: "20mb", extended:true}));
 app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

 app.use(cors()); //initialize cors
 app.use('/students' , studentRoutes); // use(paths , import ) all the routes will start with /students
 app.use(express.json());



 const CONNECTION_URL = 'mongodb+srv://Toni:toni1234@cluster0.sl6yo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

 const PORT = process.env.PORT || 5000; // || means or 

 mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true}) //both true to avoid warnings and errors
 .then(() => app.listen(PORT , () => console.log(`Server running on port : ${PORT}`))) // if connection successful 
 .catch((error) => console.log(error.message)); // in case of error


 mongoose.set('useFindAndModify' , false);