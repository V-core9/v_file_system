const error_messenger = require("./error_messenger")
const devMode = true;

const emptyPATH = (funcName = null,  path = null ) => {
  if (path === null || path.length === 0 || path === "") {
    if (devMode) console.warn(error_messenger.emptyParams(funcName, "path"));
    
    return true;
  }
  return false;
};

const notEmptyPATH = (funcName = null,  path = null ) => {
  return !emptyPATH(funcName, path);
};

module.exports = [ emptyPATH, notEmptyPATH ];
