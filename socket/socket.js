import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const app = express();

// serve public folder
app.use(express.static("public"));

// create http server
const server = createServer(app);

// attach socket.io
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("new user connected:", socket.id);

    // send welcome message
    socket.emit("chatMessage", "Welcome to class chat");

    // listen from client
    socket.on("chatMessage", (msg) => {
        console.log("msg from client:", msg);

        // broadcast to all
        io.emit("chatMessage", msg);
    });

    // disconnect
    socket.on("disconnect", () => {
        console.log("user disconnected:", socket.id);
    });
});

// send index.html
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");
});

// start server
server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
