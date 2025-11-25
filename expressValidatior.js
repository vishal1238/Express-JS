// express validator -> validates the data 
// vaild, clean safe,
import express from 'express'

// install first -> npm install express-validator
import { body,validationResult } from 'express-validator'

//create application
const app = express()

//routes
app.use(express.json())
app.post('/register', 
    [
        //validation rules
        body('name')
        .notEmpty()
        .withMessage('Name is required'),

        //email id
        body('email')
        .isEmail()
        .withMessage("valid email is required"),
        body('password')
        .isLength({min: 7})
        .withMessage('password is required in length of 7')
    ],

    (req, res) => {
        //collect all the error from the request
        const errors = validationResult(req)

        //is there are error send them back as json
        if(!errors.isEmpty()){

            return res.json(errors)

        }
        //no error
        
        res.send('Registration successful')
    }
)


// create a server
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
  