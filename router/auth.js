const router = require('express').Router()
const User  = require('../models/userschema');
const bcrypt = require("bcrypt");
const sendEmail = require('./otp')

//Register
router.post('/register', async(req,res)=> {
    try {
        console.log(req.body)
        const pass = await bcrypt.genPass(15)
        const num = Math.round(1000 + Math.random() * 9000);
        clg(num);
        const hashedpassword = await bcrypt.hash(req.body.Password, pass);
        const newuser = new User({
            username:req.body.username,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            password:hashedpassword,
            verificationNumber:num
        })

        const name = req.body.userName

         await sendEmail(email,name,String(num));
        const user = await newuser.save()
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
})


//login
router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({VerificationNumber:req.body.verificationNumber})
        if(!user){
            res.status(403).json("Email not matched")
        }
        if(user.VerificationNumber == req.body.verificationNumber)
        User.findByIdAndUpdate({username:req.body.username},{
            verificationStatus:"verfied"
        },null, function (err, doc) {
            if(err)[
                console.log(err)
            ]
            else{
                console.log("Document : ", docs);
            }
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(user)
    }
})



module.exports = router;