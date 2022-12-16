const registerUser =  (req,res) => {
    if( !req.body.email) {
        res.status(404)
        trow new Error('Please enter add an emaoi
    }
    res.send("Register User")
};

module.exports = {
    registerUser
}