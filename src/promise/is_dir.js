const fs = require('fs').promises;

isDir = async (dirPath) => {
  try {
    return (await fs.lstat(dirPath)).isDirectory();
  } catch (error) {
    return false;
  }
};

module.exports = isDir;
