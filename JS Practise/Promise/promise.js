
 function sendRequest(url){
   return new Promise(function(resolve,reject){
        let req= new XMLHttpRequest();
        req.open('GET',url,true);
        req.setRequestHeader('content-type','application/x-www-form-urlencoded')
        req.send();
        req.onreadystatechange= function(){
        if(req.readyState==4){
            if(req.status==200){
              resolve(req.responseText);
            }                         
            else{
                reject("Failedddddd");
            }
        }
    }
});
}


// normal promisse
// sendRequest().then((data)=>{console.log(data);});
var url="https://65018911736d26322f5bda6a.mockapi.io/users"
async function display(){
    try{
        var users= await sendRequest(url);
        console.log("usersssssssssss", users);

        let userid=(JSON.parse(users))[5].id;
        let user= await sendRequest(url+"/"+userid);
        console.log("one user~!!1:", user);
    }
    catch(err){
        console.log(err);
    }
}
display();



