/*jshint esversion: 8 */
const fs = require("fs");
const isBadRequest = require("./helpers/is-bad-req");

//<!> emptyPATH ( <FUNCTION_NAME> *[req] , <PATH> *[req] )


//<_i_> vIsDir() --  check if directory exists
const vIsDir = (path = null) => {
  //-> CHECK ME OUT!!!
  if (isBadRequest("vIsDir", path)) return false;

  var helpIsDir = fs.lstatSync(path).isDirectory();
  return helpIsDir;

};

module.exports = vIsDir;
