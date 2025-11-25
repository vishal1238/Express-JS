import express from 'express'
import cookieParser from 'cookie-parser' // mid
const app = express()

//cookie parser in express
//cookie parser a mid in express that, read or manage cookies
//install it :- npm install cookie-parser


app.use(cookieParser())
//routes
app.get('/set',(req, res) => {
    res.cookie("user", "vishal", {maxAge:60000})
    res.send(`cookie value is: ${req.cookies.user}`)
})

app.get('/get',(req, res) => {
    res.send("cookie has been set")
})

app.get('/delete',(req, res) => {
    res.clearCookie("user")
    res.send("cookie has been deleted")
})

// create a server
app.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});