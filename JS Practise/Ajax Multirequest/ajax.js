  function sendRequest(method, url,data, callback){
       let req= new XMLHttpRequest();
       req.open(method, url,true);
       req.setRequestHeader('content-type','application/x-www-form-urlencoded')
       req.send();
       req.onreadystatechange= function(){
        if(req.readyState==4){
            if(req.status==200){
               // console.log(req.responseText);
                callback(null, req.responseText);
                 let userID= (JSON.parse(req.responseText))[0].id;
                  let req2= new XMLHttpRequest();
                  req2.open(method, url+"/"+userID, true);
                  req2.setRequestHeader('content-type','application/x-www-form-urlencoded');
                  req2.send();
                  req2.onreadystatechange=function(){
                    if(req2.readyState==4){
                        if(req2.status==200){
                          //  console.log("User id",JSON.parse(req2.responseText));
                            callback(null, JSON.parse(req2.responseText))
                            let req3= new XMLHttpRequest();
                            req3.open(method, 'https://65018911736d26322f5bda6a.mockapi.io/books',true);
                            req3.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                            req3.send();
                            req3.onreadystatechange=function(){
                                if(req3.readyState==4){
                                    if(req3.status==200){
                                        console.log("request3");
                                        console.log("Booksss:",JSON.parse(req3.responseText));
                                        callback(null,JSON.parse(req3.responseText))
                                    }
                                    else{
                                        //console.log("FaIlEdDDDDDDDDDDDDDDDDDD");
                                        callback("FaIlEdDDDDDDDDDDDDDDDDDD",null)
                                    }
                                }
                            }
                        }
                        else{
                           // console.log("FAILEDDDDDDD");
                           callback("FAILEDDDDDDD",null);
                        }
                    }
                  }

                  
            }
            else{
                //console.log("Failed");
                callback("Failed",null);
            }
        }
       }
  }
   var url="https://65018911736d26322f5bda6a.mockapi.io/users";
   sendRequest('GET', url,null,display);







   function display( err, data){
    if(err){
        console.error("Error", err);
    }
    else{
        console.log("Users!!!!!!!!!!!!", data);
    }
}