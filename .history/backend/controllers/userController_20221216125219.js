const asyncHandler = require('express-async-handler');


const registerUser = asyncHandler( async (req,res) => {
    const { name , email , password} = req.body;

    
});

module.exports = {
    registerUser
}