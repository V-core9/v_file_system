/* jshint esversion: 8 */
// Node.js program to demonstrate the   
// fs.mkdir() Method
  
// Include fs and path module
const vMkDir = require('../src/v_mkdir');

var dirsList = [ 'tests/testsZZ', 'tests/test/bin/js/co' ]

setTimeout(() => {
  vMkDir(dirsList[0]);
}, 150 );

setTimeout(() => {
  vMkDir(dirsList[1], true);
}, 300 );


const vIsDir = require ('../src/v_is_dir');

setTimeout(() => {

  var errorList = [];

  var help1 = vIsDir(dirsList[0]);
  var help2 = vIsDir(dirsList[1]);

  console.log("DIR_1 Found: " + help1);
  console.log("DIR_2 Found: " + help2);

  if ( help1 && help2 ) {
    console.log('\nTEST_MSG :_: All Directories Found.');
    console.log('vMkDir OK -><[_ No Errors _]>');
  }


}, 1000);
