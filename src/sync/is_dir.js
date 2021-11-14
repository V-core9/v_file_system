const fs = require("fs");

isDirSync = (path) => {
  try {
    const stats = fs.lstatSync(path).isDirectory();
    return stats;
  } catch (err) {
    //console.warn(err);
    return false;
  }
};

module.exports = isDirSync;
