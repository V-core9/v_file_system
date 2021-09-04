/*jshint esversion: 8 */
const fs = require("fs");
const vExists = require("./v_exists");
const vExistsNo = require("./v_exists-no");

//<!> emptyPATH ( <FUNCTION_NAME> *[req] , <PATH> *[req] )
const emptyPATH = (funcName = null, path = null) => {
  if (path === null || path.length === 0 || path === "") {
    console.warn(
      `ERROR: Function missing params >> ${funcName}(path => NULL) :: path can not be empty value `
    );
    return true;
  }
  return false;
};

const isBadRequest = (functionName = null, path = null) => {
  return emptyPATH(functionName, path) || vExistsNo(path);
};

//<_i_> vIsDir() --  check if directory exists
const vIsDir = (path = null) => {
  //-> CHECK ME OUT!!!
  if (isBadRequest("vIsDir", path)) return false;

  var helpIsDir = fs.lstatSync(path).isDirectory();
  return helpIsDir;
};

module.exports = vIsDir;
