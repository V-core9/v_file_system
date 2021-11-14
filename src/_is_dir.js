const fs = require('fs').promises;

const isDir = async (dirPath, cb = null) => {
  try {
    const stat = await fs.lstat(dirPath);
    cb(stat.isDirectory());
  } catch (error) {
    return false;
  }
};

module.exports = isDir;
