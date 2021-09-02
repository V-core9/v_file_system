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

vSave("./tests/demo_file_save.txt", "Hey there && YO YO YO!");
vSave("./tests/demo_file_save.txt", "1111111111111");
vSave("./tests/demo_file_save.txt", "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
