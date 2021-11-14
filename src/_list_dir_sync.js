const fs = require('fs');

const listDirSync = (dirPath) =>{
  try {
    return fs.readdirSync(dirPath);
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = listDirSync;
