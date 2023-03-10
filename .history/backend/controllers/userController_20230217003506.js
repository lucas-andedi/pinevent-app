const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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

    if(!user) {
        res.status(400)
        throw new Error("User not found , Please signup ")
    }

    // User exists , check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

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

    if(user && passwordIsCorrect) {
        const  { _id,name,email,photo,bio } = user
        res.status(200).json({
            _id,name,email,photo,bio,token
        })
    }else {
        res.status(400)
        throw new Error("Invalid email or password")
    }
});

// Logout user

const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "none",
        secure: true
    });
    return res.status(200).json({message: "Successfully logged out"})
});

// Get User Data

const getUser = asyncHandler( async (req,res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        const { _id,name,email,photo,bio } = user
        res.status(200).json({
            _id,name,email,photo,bio
        })
    }else {
        res.status(400)
        throw new Error("User not found")
    }
})

// Get Login status
const loginStatus = asyncHandler ( async (req,res) => {
    const token = req.cookies.token
    if(!token) {

        return res.json(false)
    }
    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    
    if(verified) {
        return res.json(true)
    }
    return res.json(false)

    // Update User

    
    
})
const updateUser = asyncHandler (async(req,res)=> {
    const user = await User.findById(req.user._id)

    if(user) {
        const { sname,email,photo,bio } = user
        user.email = email;
        user.name = req.body.name || name;
        user.phone = req.body.phone || phone;
        user.bio = req.body.bio || bio;
        user.photo = req.body.photo || photo;

        const updatedUser = await user.save()

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            photo: updatedUser.photo,
            bio: updatedUser.bio,
        })
    }else {
        res.status(404)
        throw new Error('User not found')
    }


})
const changePassword = 
    module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    loginStatus,
    updateUser
    
}