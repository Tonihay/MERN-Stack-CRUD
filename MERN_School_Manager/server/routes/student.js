import express from 'express';
import {getStudents, createStudent, deleteStudent} from '../controllers/student.js';
import student from '../models/student.js';

const router = express.Router(); //setup router

router.get('/' , getStudents); // from controllers
router.post('/' , createStudent); //from controllers
router.delete('/:id' , deleteStudent); //from controllers


export default router;