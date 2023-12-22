const mongoose=require('mongoose');
const express= require('express');
const cors= require('cors');
require('colors');
const url=require('./config/config');
const routes=require('./routes/booking');
 
const app= express();
app.use(express.static('./public'));
app.use(cors());
// DB Connection
mongoose.connect(url);
console.log("mongo connection successful.....".yellow.underline.bold);

app.use(express.json());
app.use(routes);


app.listen(5000,()=>{
   console.log("Server running on port 5000.....")
})


