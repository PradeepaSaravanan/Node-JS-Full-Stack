const buddies= require('../models/buddyschema');
exports.getAllBuddy=async(req,res)=>{
    try{
       const bd= await buddies.find();
       res.status(200).json(bd);
    }catch(error){
        console.error(error.message);
       res.status(500).send("Internal Server Error");   
    }
}
exports.createBuddy=async(req,res)=>{
    try{
        const addAcc= await buddies.create(req.body);
        res.status(201).json(addAcc);
    }catch(error){
        console.log(error.message)
        res.status(500).send({message:error.message});
    }
}