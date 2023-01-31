const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const { response } = require('express');

const protect = asyncHandler ( async (req,res) => {
    try {
        const token = req.cookie.token

        if(!token) {
            res.status(401)
        }
    } catch (error) {
        
    }
})

module.exports = protect