const fs = require('fs').promises;

const isFile = async (filePath) => {
  try {
    const stat = await fs.lstat(filePath);
    const isFileRes = await stat.isFile();
    return isFileRes;
  } catch (error) {
    return false;
  }
};

module.exports = isFile;
