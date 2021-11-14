const fs = require('fs').promises;

const listDir = async (dirPath) => {
  try {
    const files = await fs.readdir(dirPath);
    return files;
  } catch (error) {
    return false;
  }
};

module.exports = listDir;
