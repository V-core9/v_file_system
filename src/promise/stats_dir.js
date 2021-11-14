const pathStats = require('./_path_stats');

statsDir = async (dirPath) => {
  try {
    const res =  await pathStats(dirPath);
    if (res.isDirectory()) return res;
    return false;
  } catch (error) {
    return false;
  }
};

module.exports = statsDir;
