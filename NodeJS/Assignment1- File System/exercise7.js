const fs=require('fs');
const excelToJson= require('convert-excel-to-json');


 const result = excelToJson({
    source: fs.readFileSync('./lib/exercise7.xlsx')
})
console.log(result);
