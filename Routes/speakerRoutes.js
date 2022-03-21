const express=require("express");
const controller=require("./../Controllers/SpeakerController");


const router=express.Router();

router.route("/speakers/:id?")
.get(controller.getAllSpeakers)
.post(controller.addSpeaker)
.put(controller.updateSpeaker)
.delete(controller.deleteSpeaker);

module.exports=router;