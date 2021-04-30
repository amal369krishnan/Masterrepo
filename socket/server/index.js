const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const app = express();

const port = process.env.PORT || 4002;

//app.use(cors());
app.use(express.json());//info from front to back-end
const server = app.listen(port,()=>{console.log(`Server running on the port ${port}`)});

//io = socket(server);
io = socket(server,{
    cors: {
      origin: "http://localhost:3000"
    }});

//connection setup
io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("join_room", (room)=>{
        socket.join(room);
        console.log("New room created",room);
    });

    socket.on("send_message",(data)=>{
        
        socket.to(data.room).emit("recieve_msg",data.content);
    });

    socket.on("disconnect", ()=>{
        console.log("user Disconnected");
    })
})