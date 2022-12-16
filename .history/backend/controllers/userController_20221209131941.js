const registerUser =  (req,res) => {a
    if( !req.body.email) {
        res.status(404)
        trow new Error('Please enter 
    }
    res.send("Register User")
};

module.exports = {
    registerUser
}