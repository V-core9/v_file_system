/*jshint esversion: 8 */
const [vExists, vExistsNo] = require("../v_exists");
const [emptyPATH] = require("./empty_path");


const isBadRequest = (functionName = null, path = null) => {
  if ( emptyPATH(functionName, path) || vExistsNo(path)) return true;
  return false;
};


module.exports = isBadRequest;
