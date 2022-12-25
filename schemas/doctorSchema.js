const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    department: { type: String, required: true },
    doctorName: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    joiningDate: { type: String, required: true },
    image: { type: String, required: true },
})

module.exports = doctorSchema