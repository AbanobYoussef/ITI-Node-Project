exports.getAllStudents=(request,response)=>{
        response.status(200).json({message:"List of students",data:request.query});
    }
    
    exports.addStudent=(request,response)=>{
        response.status(201).json({message:"add student",data:request.body});
    }
    
    exports.updateStudent=(request,response)=>{
        response.status(200).json({message:"update students",data:request.body});
    }
    
    exports.deleteStudent=(request,response)=>{
        response.status(200).json({message:"delete students",data:request.params});
    }