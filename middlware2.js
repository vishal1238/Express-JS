import express from 'express'
const app = express()
//create middleware
function AuthMid(req, res, next){
    //if user login by query para
    if(req.query.user){
        console.log("user is authenticated");
        next()
    }else{
        console.log("user is not authenticated, access denied ");
        res.send("unauthenticated user please login first")
        
    }
}

//routes
app.get('/',(req, res) => {
    res.send("hello from home page");
})
app.get('/about',(req, res) => {
    res.send("hello from about page");
})

//protect route
app.get('/userDashboard',AuthMid,(req, res) => {
    res.send(`Welcome to user dashboard ${req.query.user}`);
})


app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});



/*
import express from 'express'
const app=express()

function AuthMid(req,res,next){
    if(req.query.user){
        console.log("user is authenticated")
        next()
    }
    else{
        console.log("user is not authenticated,access denied")
        res.send("unauthenticated user please login first")
    }

}

//routes
app.get('/',(req,res)=>{
    res.send("Hello from reddy page")
})


app.get('/about',(req,res)=>{
    res.send("Hello from about page")
})

//protect route

app.get('/userdashboard',AuthMid,(req,res)=>{
    res.send(`welcome to user dashboard ${req.query.user}`)
})

app.listen(5000,()=>{
    console.log("server is running at http://localhost:5000")
});
*/