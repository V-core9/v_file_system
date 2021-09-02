/* jshint esversion: 8 */
// Node.js program to demonstrate the   
// fs.mkdir() Method
  
// Include fs and path module
const fs = require('fs');

const vMkDir = (path = null, recurse = false ) => {

  if (path === null ) {
    console.warn("ERROR <_Empty_Param_> :-> vMkDir ( path = null ) :: PATH is required param. ");
    return false;
  }

  recurse = (recurse === true) ? true : false;

  var status = fs.mkdir(path, { recursive: recurse }, (err) => {
    if (err) {
       console.warn(err);
       return false;
    }
    console.log('Directory created successfully!');
    return true;
  });
  
  return status;
};

module.exports = vMkDir;
