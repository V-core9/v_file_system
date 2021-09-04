/*jshint esversion: 8 */
const fs = require("fs");
const [vExists] = require("./v_exists");

const vIsDir = (path = null) => {
  if (vExists(path)) {
    try {
      return fs.lstatSync(path).isDirectory();
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return false;
  }
};

module.exports = vIsDir;
