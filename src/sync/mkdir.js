const fs = require('fs');

mkdir = (path, recurse = false) => {
  try {
    fs.mkdirSync(path, { recursive: recurse });
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = mkdir;
