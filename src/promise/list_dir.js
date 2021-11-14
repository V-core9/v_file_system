const fs = require('fs').promises;

listDir = async (dirPath) => {
  try {
    return await fs.readdir(dirPath);
  } catch (error) {
    return false;
  }
};

module.exports = listDir;
