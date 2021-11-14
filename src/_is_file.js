const fs = require('fs').promises;

const isFile = async (filePath, cb = null) => {
  try {
    const stat = await fs.lstat(filePath);
    cb(stat.isFile());
  } catch (error) {
    return false;
  }
};

module.exports = isFile;
