import express from 'express'
const app = express()

//create a middleware
function middleware1(req, res, next){
    console.log("mid is running");
    next()
}
app.use(middleware1)

//routes
app.get('/node',(req, res) => {
    res.send("hello from node page");
})

// create a server
app.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});