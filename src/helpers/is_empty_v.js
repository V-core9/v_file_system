/*jshint esversion: 8 */
const devMode = require("./dev_mode");

const isEmptyV = ( val = null ) => {
  if (typeof val === undefined ) return false;
  console.log(process.cwd());
  console.log("isEmptyV >> val :: "+ val);
  var res = ((val === null) || ( val === "" ) || ( val.length === 0 ));
  console.log("RES :___> "+ res );
  return res;   
};

module.exports = isEmptyV;
