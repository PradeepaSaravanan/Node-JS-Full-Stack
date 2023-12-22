
  const fs= require('fs');

 let textFile="./lib/readme.txt";
 let csvfile="./lib/students.csv";
 let htmlFile="./lib/index.html";


  function getFileContent(fileName){
         fs.readFile(fileName,"utf-8", function(err,data){
          if(err){
            console.log("Failed to read a file")
          }
          else{
            console.log(data);
          }
        });
        
  }
   getFileContent(textFile);
   getFileContent(htmlFile);
   getFileContent(csvfile);
