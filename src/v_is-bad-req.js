const vExists = require("./v_exists");
const vExistsNo = require("./v_exists-no");

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


module.exports = isBadRequest;
