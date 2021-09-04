/*jshint esversion: 8 */
const emptyPATH = requre("./empty_path");

const invalidFunctionCall = (funcName = null, path = null) => {
  if ( emptyPATH(funcName, path) || vExistsNo(path)) return true;
  return false;
};

module.exports = invalidFunctionCall;
