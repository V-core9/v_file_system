const pathStats = require('./_path_stats');

statsFile = async (filePath) => {
  try {
    const res =  await pathStats(filePath);
    if (res.isFile()) return res;
    return false;
  } catch (error) {
    return false;
  }
};

module.exports = statsFile;
