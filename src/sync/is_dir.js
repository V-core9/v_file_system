const fs = require("fs");

isDir = (path) => {
  try {
    const stats = fs.lstatSync(path).isDirectory();
    return stats;
  } catch (err) {
    //console.warn(err);
    return false;
  }
};

module.exports = isDir;
