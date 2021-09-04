/* jshint esversion: 8 */
// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
const fs = require("fs");
const vExists = require("./v_exists");

const vMkDir = (path = null, recurse = false) => {
  
  if (path === null) {
    console.warn(
      "ERROR <_Empty_Param_> :-> vMkDir ( path = null ) :: PATH is required param. "
    );
    return false;
  }

  if (!vExists(path)) {
    console.log("PATH NOT FOUND GOING TO MAKE IT...");

    recurse = recurse == true ? true : false;

    console.log("RECURSIVE >> " + recurse);

    try {
      const data = fs.mkdirSync(path, { recursive: recurse });
      // Directory created successfully
      console.log("Directory created successfully");
      return true;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    console.warn(
      "WARNING: Can't make dir <_PATH='" + path + "'_> Already Exists!"
    );
    return false;
  }
};

module.exports = vMkDir;
