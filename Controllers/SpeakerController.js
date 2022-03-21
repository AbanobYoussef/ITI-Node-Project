exports.getAllSpeakers=(request,response)=>{
    response.status(200).json({message:"List of Speakers",data:request.query});
}

exports.addSpeaker=(request,response)=>{
    response.status(201).json({message:"add Speaker",data:request.body});
}

exports.updateSpeaker=(request,response)=>{
    response.status(200).json({message:"update Speaker",data:request.body});
}

exports.deleteSpeaker=(request,response)=>{
    response.status(200).json({message:"delete Speaker",data:request.params});
}