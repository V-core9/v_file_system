const fs = require('fs').promises;

read = async (filePath,  encoding = "utf8") => {
  try {
    return await fs.readFile( filePath, encoding);
  } catch (error) {
    return false;
  }
};



module.exports = read;
