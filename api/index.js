import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Mongodb is Connected")
}).catch((err)=>{
    console.log(`MongoDb error is ${err}`)
})
const app = express()

app.listen(3000,()=>{
    console.log("server running on 3000")
})