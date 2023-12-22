let p1= new Promise ( function(resolve,reject){
     var url="https://65018911736d26322f5bda6a.mockapi.io/users";
     let req= new XMLHttpRequest();
     req.open('GET',url, true);
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

let p2= new Promise ( function(resolve,reject){
    var url="https://65018911736d26322f5bda6a.mockapi.io/users/2";
    let req= new XMLHttpRequest();
    req.open('GET',url, true);
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


let p3= new Promise ( function(resolve,reject){
    var url="https://65018911736d26322f5bda6a.mockapi.io/books";
    let req= new XMLHttpRequest();
    req.open('GET',url, true);
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

Promise.([p1,p2,p3]).then((data)=>{
    console.log("All users",data);
    // console.log("one user",data);
    // console.log("All books",data);

});