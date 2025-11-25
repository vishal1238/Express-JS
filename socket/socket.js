import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const app = express();

// create http server
const server = createServer(app);

// attach socket.io
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("new user connected:", socket.id);

    // send welcome message
    socket.emit("chatMessage", "Welcome to class chat");

    // listen for message from client
    socket.on("chatMessage", (msg) => {
        console.log("msg from client:", msg);
        io.emit("chatMessage", msg); // send to everyone
    });

    // disconnect event
    socket.on("disconnect", () => {
        console.log("user disconnected:", socket.id);
    });
});

// routes
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
