const fs = require('fs');

const deleteFile = async (filePath, cb = null) => {
  try {
    const stat = await fs.unlink(filePath);
    cb({result: stat});
  } catch (error) {
    return false;
  }
};

module.exports = deleteFile;
