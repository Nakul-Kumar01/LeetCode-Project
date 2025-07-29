
const express = require('express');
const {register,login,logout} = require('../controler/userAuthent');
const userMiddleware = require('../middleware/userMiddleware');

const authRouter = express.Router();


authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout', userMiddleware,logout);
// authRouter.get('/getProfile',getProfile);


module.exports = authRouter; // ye export hota hai