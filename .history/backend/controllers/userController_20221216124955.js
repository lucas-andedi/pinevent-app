const asyncHandler = require('express-async-handler');


const registerUser = asyncHandler( async (req,res) => {

    // if( !req.body.email) {
    //     res.status(400)
    //     throw new Error("Please enter add an email");
    // }
    // res.send("Register User")
};

module.exports = {
    registerUser
}