const fs = require('fs').promises;

isFile = async (filePath) => {
  try {
    return (await fs.lstat(filePath)).isFile();
  } catch (error) {
    return false;
  }
};

module.exports = isFile;
