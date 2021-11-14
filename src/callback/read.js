const fs = require('fs');

const read = (filePath, callback, encoding = "utf8") => {
  try {
    fs.readFile( filePath, encoding, (err, data)=> {
      if (err) return;
      callback(data);
    });
  } catch (error) {
    return false;
  }
};



module.exports = read;
