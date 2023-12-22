const fs = require('fs');
function timestamp() {
    let arr = ['Jan', 'Feb', 'March', 'Apr', 'May', 'june', 'july', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date();
    let x = date.getMonth();
    return `${date.getDate()}-${arr[x]}-${date.getFullYear()}  ${date.toLocaleTimeString()}  `;
    //${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM
}

function addTimestamp() {
    fs.readFile('./lib/debug.log', 'utf-8', (err, data) => {
        if (err) console.log("Error in reading file");
        else {
            let res = data.toString().split('\n');
            let resData = '';
            for (let i = 0; i < res.length; i++) {
                let time = timestamp();
                resData += `(${time})${res[i]}\n`;
            }
            console.log("dataaaaaaaaaaaa", resData);
            fs.writeFile('./lib/debug.log', resData, (err) => {
                if (err) {
                    console.log("Failed!! unable to do write operation");
                }
                else {
                    console.log("File written successfully");
                }
            })
        }
    })
}
addTimestamp();
