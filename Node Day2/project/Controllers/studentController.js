//get   http://localhost:8080?name=eman&age=20  queryString
//get   http://localhost:8080/eman/20  queryparam
// post,put,delet  -> http Body , queryString. query params





exports.getAllStudents=(request,response)=>{
console.log(request.query);

    response.status(200).json({message:"List of students",data:request.query});
}

exports.addStudent=(request,response)=>{

//adding
    console.log(request.body);
    response.status(201).json({message:"add student"});

}

exports.updateStudent=(request,response)=>{
    response.status(200).json({message:"update students"});

}

exports.deleteStudent=(request,response)=>{
    console.log(request.params)
    response.status(200).json({message:"delete students"});

}