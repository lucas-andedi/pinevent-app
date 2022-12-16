const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requir
    }
})

const User = mongoose.Model("User" , userSchema)

module.exports = User;