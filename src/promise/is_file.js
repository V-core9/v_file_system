const fs = require('fs').promises;

isFile = async (filePath) => {
  try {
    const stat = await fs.lstat(filePath);
    return stat.isFile();
  } catch (error) {
    return false;
  }
};

module.exports = isFile;
