const fs = require('fs');

const write = (filePath, content, encoding = "utf8") => {
  try {
    fs.writeFileSync( filePath, content, encoding);
    //file written successfully
    return true;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = write;
