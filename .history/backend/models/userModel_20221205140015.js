const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

})

const User = mongoose.Model("User" , userSchema)

module.exports = User;