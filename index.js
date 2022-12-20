const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const app = express();
const mongoose = require("mongoose")



// 
// 



const uri = "mongodb+srv://<username>:<password>@cluster0.n72f5gi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
