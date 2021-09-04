/*jshint esversion: 8 */
const fs = require("fs");
const [notExistIsBadRequest] = require("./helpers/is-bad-req");

const vIsDir = (path = null) => {
  if (notExistIsBadRequest("vIsDir", path)) return false;

  var helpIsDir = fs.lstatSync(path).isDirectory();
  return helpIsDir;

};

module.exports = vIsDir;
