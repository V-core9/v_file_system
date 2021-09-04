/* jshint esversion: 8 */
// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
const fs = require("fs");
const [vExistsNo] = require("./v_exists");

const vMkDir = (path = null, recurse = false) => {
  
  recurse = recurse == true ? true : false;
  console.log("Exist NOT :: " + vExistsNo(path));
  if (vExistsNo(path)) {
    
    try {
      const data = fs.mkdirSync(path, { recursive: recurse });
      console.log("Directory created successfully");
      return true;
    } catch (err) {
      //console.warn(err);
      console.log("Failed to create directory");
      return false;
    }
  }
  return false;
  
};

module.exports = vMkDir;
