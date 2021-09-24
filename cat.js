const fs = require("fs");
const bash = require('./bash');

module.exports = function(bash) {
  fs.readFile(`./${bash}`, (err, data) => {
    
    
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
