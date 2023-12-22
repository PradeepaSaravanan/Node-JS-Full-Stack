const fs= require('fs');
const http= require('http');
const path=require('path')

var server=http.createServer();
server.listen(8080,()=>{
    console.log("Server Running on port 8080")
});

server.on('request', function (req, res) {
    if (req.url == '/' || req.url=='/home') {
       fs.readFile('./lib/home.html', 'utf-8', (err, data) => {
          if (err) {
             console.log("Failed to launch file");
          }
          res.writeHead(200);
          res.end(data);
       })
    }
    else if(req.url=='/contact'){
        fs.readFile('./lib/contact.html','utf-8', (err,data)=>{
            if (err) {
                console.log("Failed to launch file");
             }
             res.writeHead(200);
             res.end(data);    
        });
    }
    else if(req.url=='/about'){
        fs.readFile('./lib/about.html','utf-8', (err,data)=>{
            if (err) {
                console.log("Failed to launch file");
             }
             res.writeHead(200);
             res.end(data);    
        });
    }
 });
