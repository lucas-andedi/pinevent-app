const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true , "Please enter a name"]
    }
})

const User = mongoose.Model("User" , userSchema)

module.exports = User;