const pathStats = require('./_path_stats');

statsDir = async (dirPath) => {
  return await pathStats('dir', dirPath);
};

module.exports = statsDir;
