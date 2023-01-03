const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true , "Please enter a name"]
    },
    email:{
        type:String,
        required: [true , "Please enter a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
            "Please enter a valid email"
        ]
    },
    password:{
        type:String,
        required: [true , "Please enter a password"],
        minLength: [6 , "Password must be at least 6 characters"],
        // maxLength: [23 , "Password must be more than 23 characters"]
    },
    photo:{
        type:String,
        required: [true , "Please enter a photo"],
        default:"https://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone: {
        type:String,
        default:"+243"
    },
    bio:{
        type:String,
        maxLength: [250 , "Bio must be more than 250 characters"]
    },

}, {
    timestamps: true
})

//  Encrypt password before save
userSchema.pre("save", async function (next) {
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
})
const User = mongoose.model("User" , userSchema)

module.exports = User;