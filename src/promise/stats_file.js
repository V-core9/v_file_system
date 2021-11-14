const pathStats = require('./_path_stats');

statsFile = async (filePath) => {
  return await pathStats('file', filePath);
};

module.exports = statsFile;
