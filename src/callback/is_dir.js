const fs = require('fs');

const isDir = async (dirPath, cb = null) => {
  try {
    fs.lstat(dirPath, (err, stats) => {
      cb(stats.isDirectory());
    });
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = isDir;
