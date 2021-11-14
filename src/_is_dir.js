const fs = require('fs').promises;

const isDir = async (dirPath) => {
  try {
    const stat = await fs.lstat(dirPath);
    const result  = stat.isDirectory();
    return result;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = isDir;
