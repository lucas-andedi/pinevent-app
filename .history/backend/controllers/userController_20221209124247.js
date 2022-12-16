const registerUser =  (req,res) => {
    if( !req.body.email) {
        
    }
    res.send("Register User")
};

module.exports = {
    registerUser
}