   const fs= require('fs');
    
  function copyOfFile(){
    fs.copyFile('exercise2Write.txt','exercise3Copy.txt',(err)=>{
        if(err){
            console.log("Errorrrr : Falied to copy")
        }
    });


  }
  copyOfFile();
 // console.log("Copied file:", fs.readFileSync('exercise3Copy.txt','utf-8'));