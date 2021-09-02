/*jshint esversion: 8 */

// ?>  UIDST -> Unique Identification String Tag.


const fs = require("fs");

// !> Loading of the actual thing.
const vExists = require("./src/v_exists");
const vIsDir = require("./src/v_is_dir");
const vIsFile = require("./src/v_is_file");
const vMkDir = require("./src/v_mkdir");
const vSave = require("./src/v_save");

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

  //> UIDST -:- [-.N31z52h3vx98sss4.-]
  //> -v- Make Directory - with or without recursion option
  // NOTE: Also will check if it exists so it does not even try
  //       to generate folders/directories that are present.
  vMkDir( path, req ){
    return vMkDir ( path, req );
  },
  
  vMakeDir( path, req ){
    return this.vMkDir ( path, req );
  },

  vNewDir( path, req ){
    return this.vMkDir ( path, req );
  },

  vCreateDir( path, req ){
    return this.vMkDir ( path, req );
  },

  vNewFolder( path, req ){
    return this.vMkDir ( path, req );
  },

  vCreateFolder( path, req ){
    return this.vMkDir ( path, req );
  },
  
  vMakeFolder( path, req ){
    return this.vMkDir ( path, req );
  },
  //!>--END OF -> [-.N31z52h3vx98sss4.-]
  //#> Folder Creation Methods... 90% alias but ok.
  
  //=> Write content to path. 
  //>> SAVE TO FILE  
    vSave( path, content ){
    return vSave ( path, content );
  },

  //*-ALIAS vSave()
  vWriteFile( path, content ){
    return this.vSave ( path, content );
  },
  //#> END OF -> Write content to path

};

module.exports = v_fs;


