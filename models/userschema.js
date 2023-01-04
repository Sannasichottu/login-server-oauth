const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        default:""
    },
    verificationNumber:{
        type:Array
    },
    verificationStatus:{
        type:String,
        default:"not_verified"
    }
},{
    timestamps:true
})

module.exports = mongoose.model("user", userSchema)