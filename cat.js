const fs = require("fs");


module.exports = function(theData) {
  let file = theData.split(' ')[1]
  fs.readFile(`./${file}.js`, (err, data) => {
    
    if (err) {
      throw err;
    }
    else {
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    }
  }
  
  );
}
