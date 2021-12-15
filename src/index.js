
const byteSizer = require('./_helpers/byte_sizer');
const sync = require('./sync');
const promise = require('./promise');

const v_fs = {
  config: {},
  options: {},
  data: {},

  //? Async methods
  //* uses promise methods from folder 
  promise,

  copy : promise.copy ,
  read : promise.read ,
  write : promise.write ,
  listDir : promise.listDir ,
  mkdir : promise.mkdir ,
  isFile : promise.isFile ,
  isDir : promise.isDir ,
  deleteFile : promise.deleteFile ,
  removeDir : promise.removeDir ,
  statsDir : promise.statsDir ,
  statsFile : promise.statsFile ,

  //? Synchronous methods
  //* uses synchronous methods from sync folder
  sync,

  readSy : sync.read ,
  writeSy : sync.write ,
  listDirSy : sync.listDir ,
  mkdirSy : sync.mkdir ,
  isFileSy : sync.isFile ,
  isDirSy : sync.isDir ,
  deleteFileSy : sync.deleteFile ,
  removeDirSy : sync.removeDir ,
  statsDirSy : sync.statsDir ,
  statsFileSy : sync.statsFile ,
  renameSy : sync.rename ,

  //? Byte Sizer
  //* Transforms number of bytes to some bigger or smaller units.
  byteSizer,
};

module.exports = v_fs;
