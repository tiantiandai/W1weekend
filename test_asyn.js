var fs = require("fs");

var args = process.argv;
console.log(args);

fs.readFile(args[2], function(err, data){
  if(err){
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});




