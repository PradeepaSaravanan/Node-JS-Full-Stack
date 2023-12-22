const fs=require('fs');

let users = [
    {
        "name": "Ezhil",
        "age": 23,
        "gender": "Female",
        "city": "Rajapalayam"
    },
    {
        "name": "Akila",
        "age": 25,
        "gender": "Female",
        "city": "Madurai"
    },

    {
        "name": "Ezhilan",
        "age": 26,
        "gender": "Male",
        "city": "Tirunelveli"
    }

]


function jsonToText(){
    let res='';
     for(let keys in users){
        res+= `${users[keys].name}|${users[keys].age}|${users[keys].gender}|${users[keys].city}\n`
     }
     console.log(res);

     fs.writeFile('./lib/exercise6.txt', res, (err)=>{
       if(err){
        console.log('Falied');
       }
       else{
        console.log("File Written Successfully");
       }
     })
}
 jsonToText();
