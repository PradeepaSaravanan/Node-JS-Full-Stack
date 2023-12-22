const fs=require('fs');
const express= require('express');
const bodyParser = require('body-parser');
var app=express();
var users=require('./data/buddy-list.json');
//console.log("data from file",users)
app.use('/',express.static('./public'));
app.use(bodyParser.json())
app.listen(8080,()=>{
    console.log("server running on port 8080!!!!!!");
})
const save=()=>{
    fs.writeFile('./data/buddy-list.json',JSON.stringify(users),(err,data)=>{
        if(err){
            console.log("Errrrrooorrr::::")
        }
        else{
            res.json(JSON.parse(data))
        }
    })
}



app.get('/buddylist',(req,res)=>{
    res.json(users);
});
app.post('/buddylist', (req,res)=>{

    console.log("add buddy callddddddddddddddddddddddddddddddddddddddddd",req.method)
    console.log("Body req::", req.body);
    users.push(req.body);
    save();
    res.status(201).send("Success")
      res.json("post success::::::")
})

app.delete('/buddylist/:userId',(req,res)=>{
    
    var index = users.findIndex(obj => obj.userId == req.params.userId);
    users.splice(index,1);
    save();
    res.status(200).send("Success");

  
})
app.put('/buddylist/:id',(req,res)=>{
   // console.log("update buddy called!!!",req.body)
    var obj=req.body;

    var index = users.findIndex((xen)=> xen.userId == req.params.id);
    //console.log("users from put Method",users)
     console.log("Indexxxx",index);
    users[index].name=obj.name;
    users[index].statusMessage=obj.statusMessage;
    users[index].profilePicture=obj.profilePicture;
    users[index].presence=obj.presence
    save();
    res.status(200).send('Success');
})


// app.get('/buddylist',function(req,res){
//      fs.readFile('./data/buddy-list.json','utf-8',(err,data)=>{
//         if(err){
//           res.end("Error::",err);        }
//         else{
//             res.status(200).json(JSON.parse(data));
//             // res.json(data);
//             res.end();
//         }
//      })
// })

