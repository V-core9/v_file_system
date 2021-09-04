/*jshint esversion: 8 */
const error_messenger = require("./error_messenger");
const devMode = true;

const ePath = (path = null) => {
  var res = ( (path === null) || (path.length === 0) || (path === ""));
  return res;
};

const emptyPATH = (path = null) => {
  if (ePath(path)) {
    if (devMode) {
      error_messenger.emptyParams("emptyPATH", "path") ;
    }
    return true;
  }
  return false;
};

const notEmptyPATH = (path = null) => {
  if (!ePath(path)) {
    if (devMode) {
      error_messenger.emptyParams("notEmptyPATH", "path") ;
    }
    return true;
  }
  return false;
};

module.exports = [emptyPATH, notEmptyPATH];
