const fs = require("fs");

isFile = (path = null) => {
  try {
    return fs.lstatSync(path).isFile();
  } catch (err) {
    //console.warn(err);
    return false;
  }
};

module.exports = isFile;
