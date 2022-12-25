const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const doctorSchema = require("../schemas/doctorSchema");
const Doctor = mongoose.model("Doctor", doctorSchema);
 
// get all the doctors
router.get("/", (req, res) => {
     Doctor.find({}, (err, data) =>{
        if(err){
            res.status(500).json({message: "There was a server side error occured"})
        }else{
            res.status(200).json({
                status: true,
                result: data
            })
        }
        
    })
})

// get a doctor
router.get("/:id", (req, res) => {
     Doctor.findOne({_id: req.params.id}, (err, data) => {
        if(err){
            res.status(500).json({error: "There was a server side error occured"})
        }else{
            res.status(200).json({
                status: true,
                result: data
            })
        }
     })
})

// add new doctor
router.post("/", (req, res) => {
    const newDoctor = new Doctor(req.body)
    newDoctor.save((err, data) => {
        if (err) {
            res.status(500).json({ error: "There was a server side error occured" })
        } else {
            res.status(200).json({
                status: true,
                result: data
            })
        }
    })
})

// upadate doctor info
router.put("/:id", async(req, res) => {
    Doctor.updateOne({ _id: req.params.id }, { $set: { phoneNumber : "01786263715"}}, (err) =>{
        if (err) {
            res.status(500).json({ message: "There was a server side error occured" })
        } else {
            res.status(200).json({message: "Data updated successfully"})
        }
    })
})

router.delete("/:id", (req, res) => {
    Doctor.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            res.status(500).json({ message: "There was a server side error occured" })
        } else {
            res.status(200).json({ message: "Doctor deleted successfully" })
        }
    })
})

module.exports = router