const fs = require('fs').promises;

deleteFile = async (filePath) => {
  try {
    const stat = await fs.unlink(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = deleteFile;
