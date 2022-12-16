const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config()
const cors = require('cors');

const app = express();


// Middleware
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))
app.use()

// Routes
app.get("/", (req,res) => {
    res.send("Home Page")
})



// COnnect to the mongoDB
const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT , () => {
            console.log(`Server Running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })