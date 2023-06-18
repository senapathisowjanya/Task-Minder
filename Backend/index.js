const express=require('express');
const db_connect = require('./connection/db');
const userRouter = require('./routes/users.routes');
var cookieParser = require('cookie-parser');
const { taskRouter } = require('./routes/task.routes');
const { projectRouter } = require('./routes/project.routes');

require("dotenv").config();
const app = express();
const http = require('http');
const cors=require('cors');
const {Server}=require("socket.io");

app.use(cors());
app.use(express.json());
app.use(cookieParser())


const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


app.use("/users",userRouter)
app.use('/task', taskRouter);
app.use("/project", projectRouter)
server.listen(process.env.port,async()=>{
    try{
     await db_connect
     console.log(`listening on ${process.env.port}`)
     console.log("connecting to db...")
    }catch(err){
        console.log("something went wrong")
    }
})