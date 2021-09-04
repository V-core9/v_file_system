/*jshint esversion: 8 */
const vExists = require("./v_exists");

const vExistsNo = (path) => {
  console.log("Warning: No Results Found Using Provided PATH");
  return !vExists(path);
};

module.exports = vExistsNo;
