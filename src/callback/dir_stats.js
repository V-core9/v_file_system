const fs = require('fs');
const path = require('path');
const isDir = require('./is_dir');

dirStats = async (dirPath) => {
  try {
    isDir(dirPath);
    if (mDir === true) {
      const resp =  await fs.stat(dirPath);
      return resp;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = dirStats;

