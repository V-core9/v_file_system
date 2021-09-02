/*jshint esversion: 8 */

// ?>  UIDST -> Unique Identification String Tag.


const fs = require("fs");

// !> Loading of the actual thing.
const vExists = require("./src/v_exists");
const vIsDir = require("./src/v_is_dir");
const vIsFile = require("./src/v_is_file");
const vMkDir = require("./src/v_mkdir");

// !> v_fs  >> -v- File System Object
const v_fs =  {
	
  //> UIDST -:- [-.Nz22hJ441x98224.-]
  //> Checking Existence Of Some PATH 
  //> Folder or File -- that check comes after this.
  vExists(path){
    return vExists ( path );
  },

  //> isThere(path) =>-> this.vExists()
  //> Alias, nothing more
  isThere(path){
    return this.vExists(path);
  },

  //> Alias, Same as previous one. [ isThere(), vExists() ]
  exists(path){
    return this.vExists(path);
  },
  //#> End Of Existence Checking 
  //#> [-.Nz22hJ441x98224.-]


  //> Checking if some path is dir [after checking if it exists]
  vIsDir( path ){
    return vIsDir ( path );
  },

  //> Checking if some path is dir [after checking if it exists]
  vIsFile( path ){
    return vIsFile ( path );
  },

  //> -v- Make Directory - with or without recursion option
  // NOTE: Also will check if it exists so it does not even try
  //       to generate folders/directories that are present.
  vMkDir( path ){
    return vMkDir ( path );
  },
  
};

module.exports = v_fs;


