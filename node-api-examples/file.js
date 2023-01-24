const fs = require("fs");

(function () {
  const fileContent = fs.readFileSync("./index.txt");

  console.log(fileContent.toString()); //Should print whatever is put into the file
})();

//For the next one, let's open a folder and read all it's files and the file's contents;
(function() {
  fs.readdir("./", function(err, content){
    if(err){
      throw err;
    } else{
      content.forEach(fileOrFolder => {
        const splitName = fileOrFolder.split(".");
        
        if (splitName.length >=2){
          console.log("This is a file");
        }else {
          const folderContents = fs.readdirSync(fileOrFolder);
        }
      })
    }
  })


})();