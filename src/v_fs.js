/*jshint esversion: 6 */
const fs = require("fs");
const vExists = require("./v_exists");

const v_fs =  {
	
  vExists(path){
    return vExists ( path );
  },
  isThere(path){
    return this.vExists(path);
  },
  exists(path){
    return this.vExists(path);
  }
  
};

module.exports = v_fs;


