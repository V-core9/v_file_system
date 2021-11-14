const fs = require('fs');

const listDir = async (dirPath) => {
  try {
    fs.readdir(dirPath, (err, files) => {
      if(err) {
        console.error(err);
        return;
      }
      cb(files);
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = listDir;
