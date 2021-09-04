/*jshint esversion: 8 */
const fs = require("fs");
const [ existIsBadRequest ] = require("./helpers/is-bad-req");

const vIsFile = (path = null) => {
  if (existIsBadRequest("vIsFile", path)) return false;
  return fs.lstatSync(path).isFile();
};

module.exports = vIsFile;
