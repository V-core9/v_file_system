/*jshint esversion: 8 */
const fs = require("fs");

// check if directory exists
const vExists = (path = null) => {
  if (path === null) {
    console.warn(
      "ERROR: Function missing params >> vExists(path => NULL) :: path can not be empty value "
    );
    return false;
  } else {
    //console.info(`Checking PATH: '${path}' `);
    if (fs.existsSync(path)) {
      //console.log('Path found, exists!');
      return true;
    } else {
      //console.log('Path not found.');
      return false;
    }
  }
};

module.exports = vExists;
