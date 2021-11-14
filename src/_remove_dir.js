const fs = require('fs').promises;

const removeDir = async (dirPath, cb = null, options = {recursive: true}) => {
  try {
    const stat = await fs.rm(dirPath, options);
    //console.log("Async Dir Remove OK");
    cb(stat);
  } catch (error) {
    //console.log("Async Dir Remove FAIL");
    return false;
  }
};

module.exports = removeDir;
