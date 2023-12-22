const accounts= require('../models/account');

exports.getAllAccounts=async(req,res,next)=>{
    try{
        const acc= await accounts.find();
         res.status(200).json(acc);
    }
    catch(error){
    res.status(500).json({message:'Interval Server Error'})
    }
}

exports.createAccount=async(req,res,next)=>{
   try{
    const addAcc= await accounts.create(req.body);
     res.status(201).json(addAcc);
   }catch(error){
    console.log(error.message)
    res.status(500).send({message:error.message});
   }
}

exports.updateAccount=async(req,res)=>{
  try{
    const upt= await accounts.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(upt)

  }catch(error){
  res.status(500).json({message:"Internal server Error"});
  }
}
exports.deleteAccount=async(req,res)=>{
  try{
      const dlt= await accounts.findByIdAndDelete(req.params.id);
      res.status(200).json(dlt)
  } catch(error){
    res.status(500).json({message:"Internal Server error"});
  }
}
exports.getAccountById=async(req,res)=>{
  try{
    const getAccount=await accounts.findById(req.params.id);
    res.status(200).json(getAccount);
  }catch(error){
    res.status(500).json({message:"Internal server Error"});
  }
}