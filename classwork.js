import express from "express";
import fs from "fs";
const app = express()

app.use(express.urlencoded({ extended: true }));


app.use(express.json())

//routes

app.get("/",(req, res) => {
    res.send(`
        <form action="/delete" method="post">
        FileName: <input name="Filename" required/>
        <button>Delete</button>
        </form>
        `)
})

app.post("/delete", (req, res) => {
    const path = process.cwd() + "/" + req.body.Filename
    fs.unlink(path, (err) => {

        if(err){
            return res.send(err)
        }else{
            res.send("File is deleted Sucessfully")
        }
    }) //async
})


//serever create
app.listen(9000,() =>{
    console.log("Server is runiing at http://localhost:9000");
})



