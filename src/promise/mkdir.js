const fs = require('fs').promises;

mkdir = async (path, options = {}) => {
  try {
    const res = await fs.mkdir(path, options);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = mkdir;
