const registerUser =  (req,res) => {
    if( !req.body.email) {
        res.status(201)
        throw new Error("Please enter add an email");
    }
    res.send("Register User")
};

module.exports = {
    registerUser
}