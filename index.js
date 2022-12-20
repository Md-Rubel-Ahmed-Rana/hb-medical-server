const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()

// middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server in running on port 5000")
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n72f5gi.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })


app.listen(5000, () => console.log("Server is running on port 5000"))