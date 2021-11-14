const fs = require('fs').promises;

const dirStats = async (dirPath) => {
  try {
    const statsRes = await fs.stat(dirPath);
    return (statsRes.isDirectory()) ? statsRes : false;
  } catch (error) {
    return false;
  }
};

module.exports = dirStats;

