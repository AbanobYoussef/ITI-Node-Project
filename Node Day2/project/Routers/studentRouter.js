const express=require("express");
const controller=require("./../Controllers/studentController");

const router=express.Router();

router.route("/students/:id?")
.get(controller.getAllStudents)
.post(controller.addStudent)
.put(controller.updateStudent)
.delete(controller.deleteStudent);

// router.delete("/students/:id/:name",()=>{})

module.exports=router;