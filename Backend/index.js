const express=require('express');
const db_connect = require('./connection/db');
const userRouter = require('./routes/users.routes');
var cookieParser = require('cookie-parser')

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/users",userRouter)

app.listen(process.env.port,async()=>{
    try{
     await db_connect
     console.log(`listening on ${process.env.port}`)
     console.log("connecting to db...")
    }catch(err){
        console.log("something went wrong")
    }
})