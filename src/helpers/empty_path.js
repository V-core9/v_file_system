/*jshint esversion: 8 */
const isEmptyV = require("./is_empty_v");

const emptyPATH = (path = null) => {
  console.log("emptyPATH >> path :: " + path);
  return isEmptyV(path);
};

const notEmptyPATH = (path = null) => {
  console.log("notEmptyPATH >> path :: " + path);
  return !isEmptyV(path);
};

module.exports = [emptyPATH, notEmptyPATH];
