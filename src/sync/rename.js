const fs = require('fs');

rename = (pathOld, pathNew) => {
  try {
    fs.renameSync(pathOld, pathNew);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = rename;
