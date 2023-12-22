function ajaxFunction(){
    console.log("##############")
    var req= new XMLHttpRequest();

    req.open('GET',"https://www.pinterest.com/pin/337066353376555020/",true);
   // req.open('GET',"https://www.geeksforgeeks.org/",true, 'pradeepa230919@gmail.com','Pradeepa@23')
    
    req.setRequestHeader('content-type','image/png');
    
    
    req.send();
    req.onreadystatechange=function(){
        if(req.readyState==4 ){
            console.log("response ready");
            if(req.status==200){
                // console.log(this.statusText);
                // console.log("Deleted Successfully");
                 console.log(req.responseText);
                 document.write(req.response);
                //  console.log("Headers", this.getAllResponseHeaders())
                // console.log(this.getResponseHeader("content-type"));
                //this.abort();
               // console.log(req.readyState);

            }
        }
    }
}