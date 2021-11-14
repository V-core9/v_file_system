const fs = require('fs').promises;

pathStats = async ( chPath) => {
  try {
    return await fs.stat(chPath);
  } catch (error) {
    return false;
  }
};


module.exports = pathStats;

