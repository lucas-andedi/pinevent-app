const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true , "Please enter a name"]
    },
    email:{
        type:String,
        required: [true , "Please enter a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
            "Please enter a valid email"
        ]
    }
})

const User = mongoose.Model("User" , userSchema)

module.exports = User;