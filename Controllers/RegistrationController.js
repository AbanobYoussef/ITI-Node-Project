
exports.registerStudent=(request,response)=>{
    response.status(200).json({message:"List of Events",data:request.body});
}


exports.registerSpeaker=(request,response)=>{
    response.status(200).json({message:"List of Events",data:request.body});
}