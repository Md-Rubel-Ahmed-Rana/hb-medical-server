const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema({
    department: {type: String,required: true},
    doctorName: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    patientName: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    paid: {type: Boolean,enum: [true | false]}
})

module.exports = appointmentSchema