const express=require("express");
const controller=require("./../Controllers/RegistrationController");


const router=express.Router();

router.post("/Student",controller.registerStudent)
router.post("/Speaker",controller.registerSpeaker);

module.exports=router;