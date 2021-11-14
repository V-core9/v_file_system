const fs = require('fs');
const {v_log} = require('../v_log');
const read = require('./_read');
const readSync = require('./_read_sync');
const write = require('./_write');
const writeSync = require('./_write_sync');
const listDir = require('./_list_dir');
const listDirSync = require('./_list_dir_sync');
const mkdir = require('./_mkdir');
const mkdirSync = require('./_mkdir_sync');
const isFile = require('./_is_file');
const isFileSync = require('./_is_file_sync');
const isDir = require('./_is_dir');
const isDirSync = require('./_is_dir_sync');
const deleteFileSync = require('./_delete_file_sync');
const deleteFile = require('./_delete_file');
const removeDirSync = require('./_remove_dir_sync');
const removeDir = require('./_remove_dir');

const v_fs = {
  config: require('../v_config'),
  options: {},
  data: {},
  listDir,
  listDirSync,
  write,
  writeSync,
  read,
  readSync,
  mkdir,
  mkdirSync,
  isFile,
  isFileSync,
  isDir,
  isDirSync,
  deleteFile,
  deleteFileSync,
  removeDir,
  removeDirSync,
};


module.exports = v_fs;
