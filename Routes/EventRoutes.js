const express=require("express");
const controller=require("./../Controllers/EventController");


const router=express.Router();

router.route("/speakers/:id?")
.get(controller.getAllEvents)
.post(controller.addEvent)
.put(controller.updateEvent)
.delete(controller.deleteEvent);

module.exports=router;