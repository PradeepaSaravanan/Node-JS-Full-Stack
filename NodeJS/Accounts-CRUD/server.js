const express= require('express');
const bodyParser= require('body-parser');
const dotenv=require('dotenv');
const logger= require('morgan');
const moment= require('moment')
require('colors')
const db= require('./config/db')
const app=express();
dotenv.config({path:"./config/config.env"});
db(app);
app.use(express.json())
if (process.env.NODE_ENV === "development") app.use(logger("dev"));
app.use("/api/v1", require('./Controller/accounts'));
module.exports=app





