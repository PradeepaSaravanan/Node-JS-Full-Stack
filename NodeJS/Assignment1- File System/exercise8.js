const fs = require('fs');
const json2xls= require('json2xls')
const jsonFile=require('./lib/exercise8.json')
function jsonToExcel() {
    var xls = json2xls(jsonFile);
    fs.writeFile('exercise8.xlsx', xls, 'binary', (err) => {
        if (err) {
            console.log("Falieddddd")
        }
    })
}
jsonToExcel();