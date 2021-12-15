const pathStats = require('./_path_stats');

statsFile = async (filePath) => {
  try {
    const res =  await pathStats(filePath);
    return (res.isFile()) ? res : false;
  } catch (error) {
    return false;
  }
};

module.exports = statsFile;
