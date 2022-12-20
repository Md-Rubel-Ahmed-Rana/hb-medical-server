const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const appointmentHandler = require("./routeHandler/appointmentHandler")


// initialize express app
const app = express();

// middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server in running on port 5000")
})


mongoose.set("strictQuery", false)

// connecting mongoose with mongodb
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n72f5gi.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
.then(() => console.log("Database is connected successfully"))
.catch((err) => console.log(err.message))

// appointment handler
app.use("/appointment", appointmentHandler)



app.listen(5000, () => console.log("Server is running on port 5000"))