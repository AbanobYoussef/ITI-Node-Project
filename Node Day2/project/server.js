const express=require("express");
const body_parser=require("body-parser");

const studentRouter=require("./Routers/studentRouter");


//http://localhost:8080

const app=express();
app.listen(process.env.PORT||8080,()=>{
    console.log("I am Listening .......")
});//listen

//******* Middlewraes */
app.use((request,response,next)=>{
    console.log("First MW.... ",request.url,request.method);
    next();
   
});
//second
// app.use((request,response,next)=>{
// console.log("Second Middlleware");
// // next(new Error(" EROOR OBJECT "));
// throw new Error(" New Error");

// });

//Routers 

app.use(body_parser.json())//json
app.use(body_parser.urlencoded({extended:false}))//form
app.use(studentRouter);


//Not FOUND
app.use((request,response)=>{
    response.status(404).send("Page is Not Found");
});

//Error MiddleWrae
app.use((error,request,response,next)=>{   //Function.length
    response.status(500).send(error+"");
})







