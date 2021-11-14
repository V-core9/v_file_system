const fs = require('fs');

mkdirSync = (path, recurse = false) => {
  recurse = recurse == true ? true : false;
  try {
    return fs.mkdirSync(path, { recursive: recurse });
  } catch (err) {
    //console.warn(err);
    return false;
  }
};

module.exports = mkdirSync;
