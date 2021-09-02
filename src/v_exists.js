/*jshint esversion: 8 */
const fs = require('fs');

// check if directory exists
const vExists = (path = null) => {
  if (path === null ) {
    console.warn("\nERROR: Function missing params >> vExists(path => NULL) :: path can not be empty value \n");
    return false;
  } else {
    console.info(`\nChecking PATH: '${path}' `);
    if (fs.existsSync(path)) {
      console.log('Path found, exists!\n');
      return true;
    } else {
      console.log('Path not found.\n');
      return false;
    }
  }
};

module.exports = vExists;
