/*jshint esversion: 8 */
const isEmptyV = require("./is_empty_v");

const emptyPATH = ( path = null ) => {
  return isEmptyV( path );
};

const notEmptyPATH = ( path = null ) => {
  return !isEmptyV( path );
};

module.exports = [ emptyPATH, notEmptyPATH ];
