const fs = require('fs');

statsFile = (filePath) => {
  try {
    const res = fs.statSync(filePath);
    return (res.isFile()) ? res  : false;
  } catch (error) {
    return false;
  }
};

module.exports = statsFile;

