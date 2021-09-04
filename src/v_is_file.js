/*jshint esversion: 8 */
const fs = require("fs");
const [vExists] = require("./v_exists");

const vIsFile = (path = null) => {
  if (vExists(path)) {
    try {
      return fs.lstatSync(path).isFile();
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return false;
};

module.exports = vIsFile;
