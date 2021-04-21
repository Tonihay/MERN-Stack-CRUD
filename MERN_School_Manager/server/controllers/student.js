import StudentData from '../models/student.js'


export const getStudents  =  async (req, res) => {
    try{
        const allStudents = await StudentData.find(); // go to model find all the students data that is available and save it in allStudents
                                                  // use await so the function doesnt take too long             
        res.status(200).json(allStudents);
    } catch(error) {
        res.status(404).json({message : error.message})
    }

}

export const createStudent  = async (req, res) => {
    const student = req.body; // whatever request i get will be stored in student

    const newStudent = new StudentData(student); // =  new variable(model)

    try{
       await newStudent.save(); // saving data

       res.status(201).json(newStudent); // 201 : created

    }catch(error){
        res.status(409).json({message : error.message}) // 409 : conflict

    }

}

export const deleteStudent  = async (req, res) => {
    const id = req.params.id; 
    try{
      
await  StudentData.findByIdAndRemove(id).exec();
res.send("Successfully Deleted")
    }catch(error){
        console.log(error);        
    }

}
