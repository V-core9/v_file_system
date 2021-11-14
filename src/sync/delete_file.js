const fs = require('fs');

deleteFile = (filePath) => {
  try {
    fs.unlinkSync(filePath);
    return true;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = deleteFile;
