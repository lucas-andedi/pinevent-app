const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        
    }
})

const User = mongoose.Model("User" , userSchema)

module.exports = User;