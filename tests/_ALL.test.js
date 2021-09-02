/*jshint esversion: 7 */
var wrap = require('word-wrap');
const boxen = require('boxen');
const chalk = require('chalk');
const v_fs = require('../v_fs');

//-> List of PATH(s) to use while testing.
const testList = [
  {
    path: './src',
    resultIs: 'DIR',
    code: '<_PATH_Ended_As_DIR_>',
  },
  {
    path: './bin',
    resultIs: '_NR_',
    code: '<_BAD_PATH_>',
  },
  {
    path: './tests',
    resultIs: 'DIR',
    code: '<_PATH_Ended_As_DIR_>',
  },
  {
    path: './src/uploads',
    resultIs: '_NR_',
    code: '<_BAD_PATH_>',
  },
  {
    path: './src/src',
    resultIs: '_NR_',
    code: '<_BAD_PATH_>',
  },
  {
    path: './src/v_exists',
    resultIs: '_NR_',
    code: '<_BAD_PATH_>',
  },
  {
    path: './src/v_exists.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
  },
  {
    path: 'src/v_exists.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
  },
  {
    path: './src/v_is_dir.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
  },
  {
    path: 'src/v_is_dir.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
  },
  {
    path: './src/v_is_file.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
  },
  {
    path: 'src/v_is_file.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
  },  
  {
    path: './src/v_mkdir.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
    disabled: 'YES',
  },
  {
    path: 'src/v_mkdir.js',
    resultIs: 'FILE',
    code: '<_PATH_Ended_As_File_>',
    disabled: true,
  },
];


// console.log( v_fs.vExists(dir));
console.log( v_fs.vExists('./src'));
console.log( v_fs.isThere('./LICENSE'));
console.log( v_fs.exists('./src/LICENSE'));
console.log( );

//-> v_fs.vIsFile(path) :: Checking if path provided is FILE.
console.log( v_fs.vIsFile('LICENSE'));
console.log( );
//-> v_fs.vIsDir(path) :: Checking if path provided is DIRECTORY.
console.log( v_fs.vIsDir('LICENSE'));
console.log( );


var VfsTESTER = [];

testList.forEach( testItem => {
  //console.log(testItem.path);
  //console.log( );
  
  var disabled = false;

  if (typeof testItem.disabled !== undefined){
    if ((testItem.disabled === true) || (testItem.disabled === 'YES') || (testItem.disabled === "force")) {
      disabled = true;
    }
  }

  if ( ! disabled ) {

    var isDirHelper   = ( testItem.resultIs === "DIR" ) ? true : false;                           // ? TRUE -> if "DIR" expected.
    var isFileHelper  = ( testItem.resultIs === "FILE" ) ? true : false;                          // ? TRUE -> if "FILE" set in resultIs.
    var existsHelper  = ( ( isDirHelper == true ) || ( isFileHelper == true ) ) ? true : false;   // ? TRUE -> If any of previous have value true then it exists.
    
    if ( v_fs.vExists(testItem.path) != existsHelper ) {
      VfsTESTER.push({timestamp: Date.now(), msg: "FALING CONIDITION >> [ vExists != existsHelper ] ", path: testItem.path});
    }
    if ( v_fs.isThere(testItem.path) != existsHelper ) {
      VfsTESTER.push({timestamp: Date.now(), msg: "FALING CONIDITION >> [ vExists != existsHelper ] ", path: testItem.path});
    }
    if ( v_fs.exists(testItem.path) != existsHelper ) {
      VfsTESTER.push({timestamp: Date.now(), msg: "FALING CONIDITION >> [ vExists != existsHelper ] ", path: testItem.path});
    }
    if ( v_fs.vIsDir(testItem.path) != isDirHelper ) {
      VfsTESTER.push({timestamp: Date.now(), msg: "FALING CONIDITION >> [ vIsDir != isDirHelper ] ", path: testItem.path});
    }
    if ( v_fs.vIsFile(testItem.path) != isFileHelper ) {
      VfsTESTER.push({timestamp: Date.now(), msg: "FALING CONIDITION >> [ vIsFile != isFileHelper ] ", path: testItem.path});
    }
  
    // console.log( v_fs.vExists(testItem.path) );
    // console.log( v_fs.isThere(testItem.path) );
    // console.log( v_fs.exists(testItem.path) );
    // console.log( v_fs.vIsDir(testItem.path) );
    // console.log( v_fs.vIsFile(testItem.path) );

  } else {
    console.log("SKIPPING DISABLED TEST!")
  }
});



console.log( v_fs );
console.log( );

console.log("Custom Error Log: ");
console.log(VfsTESTER);

var cliResponseSTATUS = "";
var cliResponseMSG = "";
var cliResponseTitle = chalk.whiteBright.bold.bgGray("📋 TESTING RESULTS            "+ Date.now() +" ⌚");

if (VfsTESTER.length === 0) {
  cliResponseMSG += chalk.whiteBright.bold('  🔥 Testing Message >> ') + "\n";
  cliResponseMSG += chalk.cyanBright( wrap(  'All tests passed with! YEAAA :D Time for live server hahaha... Additionally you can look for more info about what is going on by using flags. Try starting with help to see what it is offering to you.', {width: 50}) );
  
  cliResponseSTATUS += chalk.blueBright.bold('🚨 Number Of Errors                  ') + chalk.bgGray.whiteBright.bold( '╣ '+ VfsTESTER.length + ' ╠') + chalk.white.bold(" \n\n");
  cliResponseSTATUS += chalk.blueBright.bold('🚀 Test Status:                      ') + chalk.black.bgGreen.bold('✅ OK');
}


console.log(chalk.blackBright ( boxen( (  chalk.whiteBright.bold.bgGray(boxen(cliResponseTitle, { padding: 1, borderStyle: 'classic'} )) + "\n" + boxen( cliResponseMSG , {padding: 0, borderStyle: 'round', dimBorder: true}) + "\n" + boxen( cliResponseSTATUS , {padding: 1, borderStyle: 'bold'}) ) , { margin: 1, borderStyle: 'doubleSingle', align: 'center', float: 'left'}) ) );
