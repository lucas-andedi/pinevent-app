const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String
    }
})

const User = mongoose.Model("User" , userSchema)

module.exports = User;