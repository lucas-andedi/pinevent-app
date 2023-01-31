const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");

const protect = asyncHandler ( async (req,res) => {
    try {
        const token = req.cookie.token
    } catch (error) {
        
    }
})

module.exports = protect