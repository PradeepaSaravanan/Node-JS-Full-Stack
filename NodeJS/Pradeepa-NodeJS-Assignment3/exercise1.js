const http = require('http');
const fs = require('fs');
const path = require('path');
var server = http.createServer();
server.on('request', function (req, res) {
   console.log("Server onnnnnn")
   if (req.url == '/') {
      console.log("inside iffffff");
      fs.readFile('./lib/index.html', 'utf-8', (err, data) => {
         if (err) {
            console.log("Failed to launch file");
         }
         res.writeHead(404);
         res.end(data);
      })
   }
});
server.listen(8080, () => {
   console.log("Server started running on port 8080 !!!!!!!");
});
