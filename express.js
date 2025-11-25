import express from 'express';

// create an application
const app = express();

// define routes
app.get('/', (req, res) => {
  res.send("Hello from Express Server");
});




// about route
//GET Method
app.get('/about', (req, res) => {
  res.send("Hello from about express server");
});

// query parameters -> ?name=vishal
app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name} welcome to express`);
});


app.use(express.urlencoded({extended:true}))

//POST Method
app.get('/form', (req, res) => {
    res.sendFile(process.cwd() + '/index.html')
})

app.post('/submit', (req, res) => {
    const name = req.body.name
    res.send(`Form is recieved hello ${name}`)
})

//PUT Method
//Update existing data
app.use(express.json)
let user = {name :"Vishal", State: "UP", Temp: 900}
app.get('/user', (req, res) => res.json(user))

app.put('/user', (req, res) => {
    user = {...user, ...res.body}
    res.json({message: "User Updated", user})
})



// create a server
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
