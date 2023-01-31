const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const { response } = require('express');

const protect = asyncHandler ( async (req,res,next) => {
    try {
        const token = req.cookie.token

        if(!token) {
            res.status(401)
            throw new Error('Not authorized, please Login')
        }

        // Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        // Get user id from token
        user = await User.findById(verfied.id).select("-password")

        if(!user){
            res.status(401)
            throw new Error('User not found')  
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401)
        throw new Error('Not authorized, please Login')
    }
})

module.exports = protect