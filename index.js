import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// var qr = require('qr-image');

inquirer
  .prompt([
    {message: "Type in your URL : ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
     // Use user feedback for... whatever!!
     fs.writeFile("URL.txt",url,(err)=> {
        if (err) throw err;
        console.log("File is saved!");
     });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be render to current environment
    } else {
      // Something else went wrong
    }
  });
