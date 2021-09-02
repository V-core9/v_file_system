/* jshint esversion: 8 */
// Node.js program to demonstrate the   
// fs.mkdir() Method
  
// Include fs and path module
const vMkDir = require('../src/v_mkdir');

setTimeout(() => {
  vMkDir('testsZZ');
}, 150 );

setTimeout(() => {
  vMkDir('tests/test/bin/js/co', true);
}, 300 );


const vIsDir = require ('../src/v_is_dir');

setTimeout(() => {
  console.log(vIsDir('testsZZ'));
  console.log(vIsDir('tests/test/bin/js/co'));
}, 1000);
