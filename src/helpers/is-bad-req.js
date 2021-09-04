/*jshint esversion: 8 */
const [vExists, vExistsNo] = require("../v_exists");
const [emptyPATH] = require("./empty_path");


const existIsBadRequest = (functionName = null, path = null) => {
  if ( emptyPATH(functionName, path) || vExists(path)) return true;
  return false;
};

const notExistIsBadRequest = (functionName = null, path = null) => {
  if ( emptyPATH(functionName, path) || vExistsNo(path)) return true;
  return false;
};


module.exports = [existIsBadRequest, notExistIsBadRequest] ;
