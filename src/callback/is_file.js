const fs = require('fs');

const isFile = async (filePath, cb=null) => {
  try {
    fs.lstat(dirPath, (err, stats) => {
      cb(stats.isFile());
    });
  } catch (error) {
    return false;
  }
};

module.exports = isFile;
