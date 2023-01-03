const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');



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

    const userExists = await User.findOne({email})

    if(userExists) {
        
    }
});

module.exports = {
    registerUser
}