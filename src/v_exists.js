/*jshint esversion: 8 */
const fs = require("fs");
const [emptyPATH] = require("./helpers/empty_path");

const vExists = (path = null) => {
  if (emptyPATH(path)) return false;

  console.log("vExists try->");
  try {
    return fs.existsSync(path);
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const vExistsNo = (path = null) => {
  console.log(vExists(path));
};

module.exports = [vExists, vExistsNo];

vExists("src");
vExists("./src");
vExists("./src/");
