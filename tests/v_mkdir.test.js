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
  console.log(vIsDir(dirsList[0]));
  console.log(vIsDir(dirsList[1]));
}, 1000);
