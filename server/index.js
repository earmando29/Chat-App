const express = require('express');
const app = express()
const http = require('http');
const cors = require('cors');   // 4.4k (gzipped: 1.9k)
const{ Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: { 
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// listens to event (connection in this case)
// add callback to connection (id will be logged)
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("User Disconnected: ", socket.id);
    })
})

server.listen(3001, () => {
    console.log("SERVER RUNNING");
});
