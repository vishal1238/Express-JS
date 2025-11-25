import express from 'express'

//middleware
//modify the req, process data, add checks, stop/ forward the req
//req -> M1 -> M2 -> M3 -> route handler -> res
//req
// res 
//next -> function that control the middleware
const app = express()
//create an middleware
function middlware(req, res, next){
    console.log("Middleware runs")
    console.log("req url", req.url)
    console.log("req method", req.method)
    // next()
}
app.use(middlware)

//routes
app.get('/',(req, res) => {
    res.send("hello from home page")
})
app.get('/bout',(req, res) => {
    res.send("hello from about page")
})



// create a server
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});