const fs = require('fs').promises;

isDir = async (dirPath) => {
  try {
    const stat = await fs.lstat(dirPath);
    return stat.isDirectory();
  } catch (error) {
    return false;
  }
};

module.exports = isDir;
