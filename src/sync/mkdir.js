const fs = require('fs');

mkdirSync = (path, recurse = false) => {
  recurse = recurse == true ? true : false;
  try {
    fs.mkdirSync(path, { recursive: recurse });
    return true;
  } catch (err) {
    //console.warn(err);
    return false;
  }
};

module.exports = mkdirSync;
