const express = require('express');

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

const port = 3001

app.get('/', (req, res) => {
    res.send("Hellow Everybody X") 
})
 
io.on("connection", socket => {
    console.log("Someone connected")
    console.log(roomId);
    console.log(userName);
} )

server.listen(port, () => {
    console.log("Gluchat API listenin localhost:3001");
})