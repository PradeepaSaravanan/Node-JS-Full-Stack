const fs = require('fs');
const http = require('http');
var server = http.createServer();
var port = 8080, hostname = 'localhost';
server.on('request', function (req, res) {
    console.log("Request Received!!!1",req);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Orgin, X-Requested-With,Content-type,Accept");
    res.setHeader("Content-Type", 'text/plain');
    res.statusCode = 200;
    // var stream = true;

    // if (stream) {
       var  stream = fs.createReadStream('./lib/exercise1.txt');
        stream.on('data', function (data) {
            var chunk = data.toString();
            console.log(chunk);
        });
        stream.pipe(res);
    // }else{
    //     fs.readFile('./lib/exercise1.txt','utf-8', (err,data)=>{
    //         console.log("Content of file without stream:\n", data);
    //         res.end(data);
    //     });
    // }
})
 server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);

 })