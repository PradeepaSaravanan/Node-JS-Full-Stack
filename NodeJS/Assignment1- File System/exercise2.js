const fs= require('fs');

function randomWord(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const len = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * len));
      counter += 1;
    }
    return result;
}


function writefile(){
    for(let i=0;i<100;i++){
        let content=randomWord(10);
        content+="\n";
        // console.log("content:".content);
        fs.appendFile('exercise2Write.txt', content , function(err){
            if(err){
                console.log("Faileddd");
            }
           
        });
     }
}
writefile();

 

