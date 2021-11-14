const fs = require('fs').promises;

const removeDir = async (dirPath, cb = null, options = {recursive: true}) => {
  try {
    fs.rm(dirPath, options, (err) => {
      if(err) return;
      cb(true);
    });
  } catch (error) {
    //console.log("Async Dir Remove FAIL");
    return false;
  }
};

module.exports = removeDir;
