/*jshint esversion: 8 */
const fs = require("fs");
const [notEmptyPATH] = require("./helpers/empty_path");

const vExists = (path = null) => {
  if (notEmptyPATH(path)) {
    console.log("vExists try->");
    try {
      var res = fs.existsSync(path);
      return res;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return false;
  }
};

const vExistsNo = (path = null) => {
  console.log(vExists(path));
};

module.exports = [vExists, vExistsNo];
