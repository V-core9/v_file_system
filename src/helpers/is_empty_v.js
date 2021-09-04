/*jshint esversion: 8 */
const devMode = require("./dev_mode");

const isEmptyV = ( val = null ) => {
  return ((val === null) || ( val === "" ) || ( val === 0 ));   
};

module.exports = isEmptyV;
