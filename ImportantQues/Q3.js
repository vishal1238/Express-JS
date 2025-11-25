// Write user text to a file using Express POST

import express from "express";
import fs from "fs";

const app =express ();
app.use(express.urlencoded({extended: true}));

app.get("/",(req, res) =>{
    res.send(`
    <form method="POST" action="/save">
    <input name="text"/>
    <button>Save</button>
    </form>  
    `)
})

app.post("/save",(req,res) => {
    fs.writeFile("output.txt", req.body.text, () => {
 res.send("saved to file");
    })
})
app.listen(9000,() => {
    console.log("Server is running at http://localhost:9000");
    
}) 