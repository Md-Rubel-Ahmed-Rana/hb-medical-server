const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose");
const appointmentSchema = require("../schemas/appointmentSchema");
const Appointment = new mongoose.model("Appointment", appointmentSchema)


// get all the appointments
router.get("/", async(req, res) => {
    try {
         await Appointment.find({}, (err, data) => {
            if (err) {
                res.status(500).json({ error: "There was an server side error occured" })
            } else {
                res.status(200).json({
                    success: true,
                    result: data
                })
            }
         }).clone().catch((errr) => console.log(errr))
    }catch (error) {
        console.log(error);
    }
})

// get an appointment
router.get("/:id", async(req, res) => {
    try {
        await Appointment.findOne({_id: req.params.id}, (err, data) => {
            if (err) {
                res.status(500).json({ error: "There was an server side error occured" })
            } else {
                res.status(200).json({
                    success: true,
                    result: data
                })
            }
        }).clone().catch((errr) => console.log(errr))
    } catch (error) {
        console.log(error);
    }
})


// post an appointment
router.post("/", async(req, res) => {
    const newAppointment = new Appointment(req.body)
    await newAppointment.save((err) => {
        if(err){
            res.status(500).json({error: "There was an server side error occured"})
        }else{
            res.status(200).json({ message: "Appointment booked successfully"})
        }
    }).clone().catch((errr) => console.log(errr))
})

// update an appointment
router.put("/:id", async(req, res) => {
    try {
        await Appointment.updateOne({ _id: ObjectId(req.params.id) }, { $set: { gender: "Female" } }, 'strictQuery', false, (err) => {
            if (err) {
                res.status(500).json({ error: "There was an server side error occured" })
            } else {
                res.status(200).json({ message: "Appointment updated successfully" })
            }
        }).clone().catch((errr) => console.log(errr))
        
    } catch (error) {
        console.log(error);   
    }
})

module.exports = router