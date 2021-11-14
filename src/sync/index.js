
const read = require('./read');
const write = require('./write');
const listDir = require('./list_dir');
const mkdir = require('./mkdir');
const isFile = require('./is_file');
const isDir = require('./is_dir');
const deleteFile = require('./delete_file');
const removeDir = require('./remove_dir');
const statsDir = require('./stats_dir');
const statsFile = require('./stats_file');
const rename = require('./rename');

module.exports = {
  read,
  write,
  listDir,
  mkdir,
  isFile,
  isDir,
  deleteFile,
  removeDir,
  statsDir,
  statsFile,
  rename
};
