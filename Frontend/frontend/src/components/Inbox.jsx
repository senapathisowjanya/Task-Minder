import React, { useState } from 'react'
import io from "socket.io-client"

const socket=io.connect("http://localhost:8080")

function Inbox() {
    const [username, setUsername] =useState("");
    const [room, setRoom] = useState("");

    const joinRoom=()=>{
        if(username!==""&& room!==""){
            socket.emit("join_room",room)

        }
    }
  return (
    <div>
        <h1>Join A Chat</h1>
        <input type='text' placeholder='John....' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='text' placeholder='Room Id...' value={room} onChange={(e)=>setRoom(e.target.value)}/>
        <button onClick={joinRoom}>Join A Room</button>
    </div>
  )
}

export default Inbox