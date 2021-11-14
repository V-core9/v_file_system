const fs = require('fs');

statsDir = (dirPath) => {
  try {
    const res = fs.statSync(dirPath);
    return (res.isDirectory() ) ? res  : false;
  } catch (error) {
    return false;
  }
};

module.exports = statsDir;

