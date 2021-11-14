const fs = require("fs");

const isFileSync = (path = null) => {
  try {
    return fs.lstatSync(path).isFile();
  } catch (err) {
    //console.warn(err);
    return false;
  }
};

module.exports = isFileSync;
