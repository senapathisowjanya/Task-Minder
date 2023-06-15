const express=require('express');
const db_connect = require('./connection/db');
const userRouter = require('./routes/users.routes');
var cookieParser = require('cookie-parser');
const { taskRouter } = require('./routes/task.routes');
const { projectRouter } = require('./routes/project.routes');

require("dotenv").config();
const app = express();




app.use(express.json());
app.use(cookieParser())
app.use("/users",userRouter)
app.use('/task', taskRouter);
app.use("/project", projectRouter)
app.listen(process.env.port,async()=>{
    try{
     await db_connect
     console.log(`listening on ${process.env.port}`)
     console.log("connecting to db...")
    }catch(err){
        console.log("something went wrong")
    }
})