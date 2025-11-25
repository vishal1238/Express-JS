//cookies - session
//cmd to install -> npm install cookie-session
//cookies session is create a session data into brower
//without any server storage

import express from 'express'
import cookieSession from 'cookie-session'

const app = express();

app.use(express.json());

app.use(cookieSession({
    name: 'session',          // cookie name
    keys: ['Secret1234'],     // required
    //cookies option
    maxAge: 20 * 60 * 1000    // 20 minutes
}));

const User = {
    username: "Vishal",
    password: "123456"
}
app.post('/login',(req, res) => {
    const {username, password} = req.body
    //check for credentials 
    if(username === User.username && password === User.password){
        //store a user into inside session cookie
        req.session.user = {username}
        res.send(`welcome ${username} to user dashboard`)
    }else{
        res.send("unauthorised user")
    }
})

app.post('/loginn', (req, res) => {
    if(req.session.user){
        res.send(`Hello ${req.session.username} Welcome to dashboard`)
    }
    else{
        res.send(`access denied`)
    }
})

//Logout create route and set req. session = null

app.post('/delete-session',(req, res) =>{
    req.session = null
    res.send('You are Logout')
})


// create server
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
