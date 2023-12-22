const mongoose = require('mongoose');
const buddySchema = new mongoose.Schema({
   userId:{
    type:Number,   
   },
    name:{
        type:String,
        unique:true,
    },
    messsage:{
        type:String,
    }
});
module.exports=mongoose.model("buddyList", buddySchema);