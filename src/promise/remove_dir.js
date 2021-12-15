const fs = require('fs').promises;

removeDir = async (dirPath, options = {recursive: true}) => {
  try {
    await fs.rm(dirPath, options);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = removeDir;
