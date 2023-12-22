function responseH(){
    fetch("https://64ed8ffb1f87218271416236.mockapi.io/api/xml/userdata").then((res)=> {
       // document.getElementById('div').innerHTML= res;
        return res.json();
        console.log(res);
    }).then((res)=> {

       // document.getElementById('div').innerHTML= JSON.stringify(res);
       document.write(JSON.stringify(res))
            console.log(res);
    });
}
