const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config()
const cors = require('cors');

const app = express();

// Routes
app.get("/")

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