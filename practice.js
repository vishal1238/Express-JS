import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use (bodyParser.urlencoded({extended: true}));

//function to check prime

function isPrime(num){
    if (num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

//Serve the HTML form

app.get("/", (req, res) => {
    res.send(`
        <h1>Prime Number Checker</h1>
        <form action="/check" method="POST">
            Enter five number: <br><br>
            <input type="number" name = "n1"><br><br>
            <input type="number" name = "n2"><br><br>
            <input type="number" name = "n3"><br><br>
            <input type="number" name = "n4"><br><br>
            <input type="number" name = "n5"><br><br>
            <button type="submit"> Check Primes</button>
        </form>
        `)
});

//process form submit

app.post("/check",(req, res) => {
    let nums = [
        parseInt(req.body.n1),
        parseInt(req.body.n2),
        parseInt(req.body.n3),
        parseInt(req.body.n4),
        parseInt(req.body.n5),
    ];

    let primes = nums.filter(isPrime);

    res.send(`
        <h1>Prime Number Results</h1>
        <p><b>Input Number: </b> ${nums.join (", ")}</p>
        <p><b>Prime Number: </b> ${primes.join (", ") || "None"}</p>
        <p><b>Count of Price Numbers: </b> ${primes.length}</p>
        <br><a href= "/"> Go Back </a>    
        `)
})

app.listen(9000,() => {
    console.log("Server is running on http://localhost:9000");
})