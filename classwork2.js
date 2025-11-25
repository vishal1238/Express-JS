import express from 'express'
import fs from 'fs'
import { href } from 'react-router-dom';
import zlib from 'zlib'

const app = express()

app.use(express.urlencoded({ extended: true }));


app.use(express.json())

//routes

app.get("/",(req, res) => {
    res.send(`
        <form action="/create" method="post">
        FileName: <input name="Filename" required/>
        content: <input name="Filename" required/>
        <button>Create</button>
        </form>
        `)
})

//1. Create a file 

app.post("/create",(req, res) => {
    const{filename, content} = req.body
    fs.writeFileSync(filename, content,(err) => {
        if(err){
            return res.send(err)
        }else{
            res.send("File is deleted Sucessfully")
        }
    });
})

//2. Read the data of file - (readFile) - Streams
 file = req.body.file
app.get('/read',(req, res) => {
    const file = req.body.file

    fs.readFile(file, 'utf-8',(err,data => {
        if(err){
            return res.send(err)
        }else{
            res.send (`the data is ${data}
                <a href="/compress">Compress File</a>`
            )
        }
    }))
})

//3. Compress and Decompress the file



//servre
app.listen(9000,() => {
    console.log("Server is running at http://localhost:9000");
    
}) 