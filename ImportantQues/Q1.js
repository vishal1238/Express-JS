// 1. Basic Express + File Handling (similar to your sample question)

// Create a Node.js Express server that serves an HTML form. The form takes a filename, and when submitted, the server deletes the file asynchronously using fs.unlink() and shows a confirmation message in the browser.

import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/",(req, res) => {
    res.send(`
        <form action="/delete" method="post">
            Enter your file name: <input name="filename" placeholder="Enter your filename" required/>
            <button>Delete file</button>
        </form>
    `);
});

app.post("/delete",(req, res) => {
    const path = process.cwd() + "/" +  req.body.filename;

    fs.unlink (path,(err) => {
        if(err){
            return res.send(err);
        }else{
            res.send("File is deleted Sucessfully")
        }
    })
})

//servre
app.listen(9000,() => {
    console.log("Server is running at http://localhost:9000");
    
}) 