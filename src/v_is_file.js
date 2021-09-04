/*jshint esversion: 8 */
const fs = require("fs");
const isBadRequest = require("./helpers/is-bad-req");

//<_i_> vIsFile() --  check if directory exists
const vIsFile = (path = null) => {
  if (isBadRequest("vIsFile", path)) return false;
  return fs.lstatSync(path).isFile();
};

module.exports = vIsFile;
