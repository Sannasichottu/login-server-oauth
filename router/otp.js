var nodemailer = require("nodemailer")

const sendEmail = async(email,name,otp)=>{
    try{
            let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user:"akashpoovan983@gmail.com",
        pass:"vuqdbntxiwxaruha",
        clientId:"1091913097848-6fs1ch218kh983rgs2fpdeclnjmir1jn.apps.googleusercontent.com",
        clientSecret:"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",
        refreshToken:"1//04UiSlrUAHH-cCgYIARAAGAQSNwF-L9Ir1NGFJ4C12jl5DO6O93cbuQNnfQ87vkGZ56_ep0h023ufdOrqVp8x_-sLUwGmmOPXFkU"
      }
    });
var composemail = {
    from:"sannasichottu@gmail.com",
    to:email,
    subject:`hi ${name} Message Your Verification code is`,
    text:otp

};

transporter.sendMail(composemail,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log("Mail sent sucessfully")
    }
});
    } catch(error) {
        console.log(error,"email");
    }
}
module.exports = sendEmail;