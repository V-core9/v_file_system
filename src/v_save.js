/*jshint esversion: 8 */
const fs = require('fs');

const vSave = ( path = null, content = null ) => {

  try {
    const data = fs.writeFileSync(path, content)
    //file written successfully
    console.log("The file was saved!");
    return true;
  } catch (err) {
    console.warn(err);
    return false;
  }

};


module.exports = vSave;
