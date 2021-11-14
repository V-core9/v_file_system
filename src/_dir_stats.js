const fs = require('fs').promises;
const path = require('path');
const isDir = require('./_is_dir');

const dirStats = async (dirPath) => {
  try {
    const mDir = await isDir(dirPath);
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

