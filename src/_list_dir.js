const fs = require('fs');

const listDir = (dirPath, cb) => {
  try {
    fs.readdir(dirPath, (err, files) => {
      if(err) return;
      cb(files);
    });
  } catch (error) {
    return false;
  }
};

module.exports = listDir;
