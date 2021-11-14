const fs = require('fs');

const removeDirSync = (dirPath, options = {recursive: true}) => {
  try {
    fs.rmSync(dirPath, options);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = removeDirSync;
