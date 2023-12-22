const fs = require('fs');
const http = require('http');
const path = require('path');


var server = http.createServer();
server.listen(8080, () => {
    console.log("server running on port 8080........")
});

server.on('request', function (req, res) {
    res.setHeader('content-type', 'text/html');
    if (req.url == '/' || req.url == '/users') {
        fs.readFile('./lib/users.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log("Failed to read text");
            }
            else {
                console.log('respnse', data);
                let result= data.split('\r\n').toString().split('|').toString().split(',');
                 console.log('ressssssssss:', result);
                let i=0;
                let content=`<table border> <tr><th>${result[i++]}</th> <th>${result[i++]}</th> <th>${result[i++]}</th> <th>${result[i++]}</th></tr>`;
                for(let j=4;j<result.length;j++){
                     content+=`<tr><td>${result[j++]}</td> <td>${result[j++]}</td> <td>${result[j++]}</td><td>${result[j]}</td></tr>`
                }
                res.end(content+'</table>');

            }
        })
    }
})