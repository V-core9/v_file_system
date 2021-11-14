const fs = require('fs');

const deleteFileSync = (filePath) => {
  try {
    fs.unlinkSync(filePath);
    return true;
  } catch(error) {
    console.error(error);
    return false;
  }
};

module.exports = deleteFileSync;
