const fs = require('fs');

const removeDirSync = (dirPath, options = {recursive: true}) => {
  try {
    return fs.rmSync(dirPath, options);
  } catch (error) {
    return false;
  }
};

module.exports = removeDirSync;
