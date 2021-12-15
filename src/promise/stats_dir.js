const pathStats = require('./_path_stats');

statsDir = async (dirPath) => {
  try {
    const res =  await pathStats(dirPath);
    return (res.isDirectory()) ? res : false;
  } catch (error) {
    return false;
  }
};

module.exports = statsDir;
