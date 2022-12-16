const registerUser =  (req,res) => {
    if( !req.body.email) {
        res.status(404)
        trow new 
    }
    res.send("Register User")
};

module.exports = {
    registerUser
}