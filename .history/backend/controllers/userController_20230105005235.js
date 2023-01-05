const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken")

// Function to generate token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
}

// Register a user
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
    });

    
    // Generate Token
    const token = generateToken(user._id)

    // Send HTTP-only cookie
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "none",
        secure: true
    })

    if(user) {
        const  { _id,name,email,photo,bio } = user
        res.status(201).json({
            _id,name,email,photo,bio,token
        })
    }else {
        res.status(400)
        throw new Error("Invalid user data")
    }
    
});

// Login user
const loginUser = asyncHandler( async (req,res) => {
    const {email,password} = req.body

    if(!email || !password) {
        res.status(400)
        throw new Error("Please add email and password")
    }

    // Check if user exists
    const user = await User.findOne({email: email})

    if(!user || !password) {
        res.status(400)
        throw new Error("Please add email and password")
    }

})


    module.exports = {
    registerUser,
    loginUser
}