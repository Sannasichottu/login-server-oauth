require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const authRoute = require('./router/auth')
const cors = require('cors');

//MiddleWare
app.use(express.json());
app.use(cors())


const PORT = 3001


//mongoose connection
const uri = process.env.ATLAS_URI

mongoose.set('strictQuery', false);
mongoose.connect(uri,err => {
    if(err) throw err;
})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Db connection successfully")
})

app.use("/api/auth", authRoute)

app.listen(process.env.PORT||PORT,(req,res)=>{
    console.log("server running on port")
})
