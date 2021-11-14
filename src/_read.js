const fs = require('fs');

const read = (filePath, callback, encoding = "utf8") => {
  try {
    fs.readFile( filePath, encoding, err => {
      if (err) {
        return false;
      }
      callback(filePath);
    });
  } catch (error) {
    return false;
  }
};



module.exports = read;
