/*jshint esversion: 8 */
const devMode = false;
const fs = require("fs");
const [emptyPATH] = require("./helpers/empty_path");
const error_messenger = require("./helpers/error_messenger");


// Checking If PATH is not null then if exists.
const vExists = (path = null) => {
  if ( emptyPATH(path) ) return false;

  var help = fs.existsSync(path);
  if (help) {
    return true;
  } else {
    return false;
  }
};

//-> Checking if exists then returning inverted value.
const vExistsNo = (path = null) => {
  return !vExists(path);
};

module.exports = [ vExists, vExistsNo ];
