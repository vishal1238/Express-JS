import express from 'express'
const app = express()

app.use(express.json());

//create a middleware
function userAuth(req, res, next){
    if(req.body.username === 'nodejs' && req.body.password === '1235'){
        next() //pass the control next mid or route
    }else{
        res.send("user is unauthorised")
    }
}

//routes
app.post('/login', userAuth,(req, res) => {
    res.send("welcome to dashboard")
})
// create a server
app.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});