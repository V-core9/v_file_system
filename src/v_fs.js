/*jshint esversion: 6 */
const fs = require("fs");
const vExists = require("./v_exists");
const vIsDir = require("./v_is_dir");
const vIsFile = require("./v_is_file");

const v_fs =  {
	
  vExists(path){
    return vExists ( path );
  },
  isThere(path){
    return this.vExists(path);
  },
  exists(path){
    return this.vExists(path);
  },

  
  vIsDir(path){
    return vIsDir ( path );
  },

	
  vIsFile(path){
    return vIsFile ( path );
  },
  
};

module.exports = v_fs;


