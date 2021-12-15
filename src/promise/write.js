const fs = require('fs').promises;

write = async (filePath, content, encoding = "utf8") => {
  try {
    await fs.writeFile(filePath, content, encoding);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = write;
