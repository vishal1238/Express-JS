// 4. EventEmitter Question

// Use EventEmitter to log a message when route is visited

import http from "http";
import { EventEmitter } from "events";

const app = express();
const emitter = new EventEmitter();

emitter.on("visit", () => 
    console.log("Homepage Visited") 
);

emitter.on("visit",(req, res) => {
    emitter.emit("visit");
    res.send("Home")
});

//servre
app.listen(9000,() => {
    console.log("Server is running at http://localhost:9000");
    
}) 
