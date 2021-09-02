/* jshint esversion: 8 */
// Node.js program to demonstrate the   
// fs.mkdir() Method
  
// Include fs and path module
const fs = require('fs');
const vExists = require ('./v_exists');

const vMkDir = (path = null, recurse = false ) => {

  if (path === null ) {
    console.warn("ERROR <_Empty_Param_> :-> vMkDir ( path = null ) :: PATH is required param. ");
    return false;
  }

  if (!vExists(path)){
    recurse = (recurse === true) ? true : false;

    var status = fs.mkdir(path, { recursive: recurse }, (err) => {
      if (err) {
        console.warn(err);
        return false;
      }
      //console.log('Directory created successfully!');
      return true;
    });
    
    return status;

  } else {
    console.warn("WARNING: Can't make dir <_PATH='"+path+"'_> Already Exists!");
    return false;
  }
};

module.exports = vMkDir;
