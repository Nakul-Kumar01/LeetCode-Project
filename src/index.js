
const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/userAuth');
const redisClient = require('./config/redis');



app.use(express.json());
app.use(cookieParser());


app.use('/user', authRouter);


const InitializeConnection = async () => {
    try {

        await Promise.all([main(), redisClient.connect()]); // parallelly connect to Mongo and Redis
        console.log("Connected to DB");

        app.listen(process.env.PORT, () => {
            console.log("server is Listening on port " + process.env.PORT);
        })
    }
    catch (err) {
        console.error("Error: " + err);
    }
}

InitializeConnection();



// main()
// .then(async ()=>{
//     console.log("Connected to DB");
//     app.listen(process.env.PORT , ()=>{
//     console.log("server is Listening on port " + process.env.PORT);
//     })
// })
// .catch(err => console.log("Error: " + err));

