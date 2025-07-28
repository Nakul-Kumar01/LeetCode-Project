const User = require('../models/user');
const validate = require('../utils/validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {

        validate(req.body);

        // also we can check here whether emailId is already registered or not
        // user.exists({ emailId: req.body.emailId }) // but no need, since already checked schema

        req.body.password = await bcrypt.hash(req.body.password, 10);


        const user = await User.create(req.body);


        // no need of await
        const token = jwt.sign({ _id: user._id, emailId: req.body.emailId }, process.env.JWT_KEY, { expiresIn: '1h' });

        res.cookie('token', token, { maxAge: 60 * 60 * 1000 }); // you can also use expire 
        res.status(201).send("User registered successfully"); // 202 after successful post request

    }
    catch (err) {
        res.status(400).send("Error: " + err); // 400 Bad Request
    }
}



const login = async (req, res) => {

    try {
        const { emailId, password } = req.body;

        if (!emailId || !password) {
            throw new Error('Invalid credentials');
        }

        const user = await User.findOne({ emailId });

        // no need of await
        const match = bcrypt.compare(password, user.password);


        if (!match) {
            throw new Error('Invalid Credentials');
        }

        const token = jwt.sign({ _id: user._id, emailId: req.body.emailId }, process.env.JWT_KEY, { expiresIn: '1h' });

        res.cookie('token', token, { maxAge: 60 * 60 * 1000 });
        res.status(200).send("Logged in successfully");
    }
    catch (err) {
        res.status(401).send("Error: " + err);
    }
}


const logout = async(req,res)=>{
     try{

     }
     catch(err){
        
     }
}