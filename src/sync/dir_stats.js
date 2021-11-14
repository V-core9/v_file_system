const fs = require('fs');
const isDir = require('./is_dir');

dirStats = (dirPath) => {
  return (isDir(dirPath)) ? fs.statSync(dirPath) : false;
};

module.exports = dirStats;

