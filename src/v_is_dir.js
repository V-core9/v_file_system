/*jshint esversion: 7 */
const fs = require('fs');
const vExists = require ('./v_exists')

// check if directory exists
const vIsDir = (path = null) => {

  if (path === null ) {
    console.warn("\nERROR: Function missing params >> vIsDir(path => NULL) :: path can not be empty value \n");
    return false;
  } else {

    if (vExists(path)){
      var helpIsDir = fs.lstatSync(path).isDirectory();
      return helpIsDir;
    } else {
      return false;
    }

  }

};

module.exports = vIsDir;

