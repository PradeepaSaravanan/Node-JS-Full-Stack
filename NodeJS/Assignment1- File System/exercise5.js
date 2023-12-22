const fs = require('fs');


function textToJson() {
    fs.readFile('./lib/exercise5text.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error in reading filee");
        }
        else {
            //console.log(data);
            let text = data.toString().split('\n').toString().split('\r').toString().split('|').toString().split(',');
            //console.log(text);
            console.log(`[ `)
            for (let i = 0; i < text.length; i++) {
                if (i === text.length - 4) {
                    console.log(`{\n "Name":"${text[i++]}", \n "Age":${text[i++]}, \n "Gender":"${text[i++]}",\n "City":"${text[i++]}" \n}`);

                }
                else {
                    console.log(`{\n "Name":"${text[i++]}", \n "Age":${text[i++]}, \n "Gender":"${text[i++]}",\n "City":"${text[i++]}" \n},`);

                }
            }
            console.log(` ]`)
        }
    })

}
textToJson();