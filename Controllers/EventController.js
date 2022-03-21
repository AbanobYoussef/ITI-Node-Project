exports.getAllEvents=(request,response)=>{
    response.status(200).json({message:"List of Events",data:request.query});
}

exports.addEvent=(request,response)=>{
    response.status(201).json({message:"add Event",data:request.body});
}

exports.updateEvent=(request,response)=>{
    response.status(200).json({message:"update Event",data:request.body});
}

exports.deleteEvent=(request,response)=>{
    response.status(200).json({message:"delete Event",data:request.params});
}