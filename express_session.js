//express - session
//cmd to install -> npm install express-session
//express session is create a session data into brower
//without any server storage

import express from 'express'
import session from 'express-session';

const app = express();

// app.use(express.json());
app.use(session({
    secret: 'keyboard', //used for signed session id
    resave: false,//don't save empty sesssions
    saveUninitialized: true,
    cookie: {secure: true}
}))

app.use(express.urlencoded ({extended: true}))
app.get('/session-created', (req, res) => {
    res.send(req.session)
})

app.get('/',(req, res) => {
    res.send(`
        <form action = " " method = "post">
        Username: <input type = "text" name = "username"><br> 
        Password: <input type = "password" name = "password"><br> 
        <input type = "submit" value = "login"><br> 
        </form>
        `)
})

app.post('/login',(req, res) => {
    //storeing username and password
    req.session.user = {
        username: req.body.username,
        password: req.body.passwordx
    }
    res.redirect('/dashboard')
})

app.get('/dashboard', (req, res) => {
    res.send(`Welcome ${req.session.user.username}`)
})

app.post('/delete-session',(req, res) =>{
    req.session = null
    res.send('You are Logout')
})


// create server
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
