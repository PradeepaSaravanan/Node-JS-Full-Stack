var fs = require('fs');
var http = require('http');


var server = http.createServer();


server.on('request', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type,Accept');
    res.setHeader('content-type', 'application/x-msdownload');
    res.statusCode = 200;
    var stream = fs.createReadStream('./lib/CiscoWebExStart.exe');
    var writeStream = fs.createWriteStream('./lib/exercise2write.exe');
    stream.on('data', function (data) {
        writeStream.write(data);
    })
    stream.pipe(res);


})
server.listen(8080, () => {
    console.log("server running on port 8080.....");
})