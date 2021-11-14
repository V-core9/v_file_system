const fs = require('fs').promises;

pathStats = async (typeFS, chPath) => {
  try {
    const statsRes = await fs.stat(chPath);
    if (typeFS === "dir") {
      return (statsRes.isDirectory()) ? statsRes : false;
    } else {
      return (statsRes.isFile()) ? statsRes : false;
    }
  } catch (error) {
    return false;
  }
};


module.exports = pathStats;

