const express = require("express");
var cors = require('cors');
var morgan = require('morgan')
const body_parser=require("body-parser");


const studentRouter=require("./Routes/studentRoutes");
const speakerRoutes=require("./Routes/speakerRoutes");
const EventRoutes=require("./Routes/EventRoutes");
const RegistrationRoutes=require("./Routes/RegistrationRoutes");


const app = express();
app.use(morgan('combined'));

app.listen(8090,()=>{
    console.log("Listening")
});
app.use(body_parser.json())//json


app.use(RegistrationRoutes);
app.use(studentRouter);
app.use(speakerRoutes);
app.use(EventRoutes);
//Not FOUND
app.use((request,response)=>{
    response.status(404).send("Page is Not Found");
});

//catch all system Errors
app.use((error,request,response,next)=>{
//  throw new Error("some Error occured");
});



// app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })