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
        match:
    }
})

const User = mongoose.Model("User" , userSchema)

module.exports = User;