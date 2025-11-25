//cooie - session
//cmd to install -> npm install cookie-session
//cookies session is create a session data into brower
//without any server storage

import express from 'express'
import cookieSession from 'cookie-session'

const app = express();

app.use(cookieSession({
    name: 'session',          // cookie name
    keys: ['Secret1234'],     // required
    //cookies option
    maxAge: 20 * 60 * 1000    // 20 minutes
}));

app.get('/visit', (req, res) => {
    // update views
    req.session.views = (req.session.views || 0) + 1;

    // output
    res.send(req.session.views + ' views');
    console.log(req.session);
});


//create session
app.get('/set-session',(req, res) =>{
    req.session.user = "Vishal"
    req.session.city = "punjab"
    res.send("session is created")
    res.send(`session set as <a href="/get-session"> get session</a>`)
})

app.get('/get-session',(req, res) =>{
    var user = req.session.user = "Vishal"
    var city = req.session.city = "punjab"
    res.send(`stored session is as ${user} and ${city}`)
})

app.get('/delete-session',(req, res) =>{
    req.session = null
    res.send('Your session is deleted')
})



// create server
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
