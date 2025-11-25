// 2. Read a File & Display Content on Server

// Create a Node.js HTTP server.
// When the user visits /read, send an HTML form asking for a filename.
// After submitting, read the file using fs.readFile (async) and display its contents on the webpage.

import http from 'http';
import fs from "fs";

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/read"){
        return res.end(`<h2>Read a file</h2><form method="POST" action="/read">
            Filename: <input name="filename required />
            <button>Read</button>
            </form>
        `)
    }
    if(req.method == "POST" && req.url === "/read"){
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            
        })
    }
})

//servre
app.listen(9000,() => {
    console.log("Server is running at http://localhost:9000");
    
}) 