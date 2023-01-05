const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken")

// Function to generate token
const generateToken   async
const registerUser = asyncHandler( async (req,res) => {
    const { name , email , password} = req.body;

    // Validation
    if( !name || !email || !password ) {
        res.status(400)
        throw new Error("Please fill in all the required fields")
    }
    if( password.length < 6) {
        res.status(400)
        throw new Error("Password must be at least 6 characters")
    }
    // Check if email already exists
    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error("Email has already been registered") 
    }

    // Create a new user

    const user = await User.create({
        name,
        email,
        password
    })
    if(user) {
        const  { _id,name,email,photo,bio } = user
        res.status(201).json({
            _id,name,email,photo,bio
        })
    }else {
        res.status(400)
        throw new Error("Invalid user data")
    }
    
});
    module.exports = {
    registerUser
}