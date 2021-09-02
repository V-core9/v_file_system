/*jshint esversion: 7 */

const v_fs = require('../src/v_fs');

// directory to check if exists
const dir = './uploads';

console.log( v_fs.vExists(dir));

console.log( v_fs.vExists('./uploads'));
console.log( v_fs.vExists('./src'));
console.log( v_fs.vExists('./bin'));
console.log( v_fs.vExists('./_tests'));
console.log( v_fs.vExists('./node_modules'));
console.log( v_fs.vExists('./node_modules/uploads'));
console.log( v_fs.vExists('./node_modules/src'));
console.log( v_fs.vExists('./node_modules/bin'));
console.log( v_fs.vExists('./node_modules/_tests'));
console.log( v_fs.vExists('./node_modules/node_modules'));

console.log( v_fs.vExists('./README.md'));
console.log( v_fs.vExists('./LICENSE'));
console.log( v_fs.vExists('./.gitignore'));
console.log( v_fs.vExists('./src/v_exists.js'));
console.log( v_fs.vExists('./src/package.json'));
console.log( v_fs.vExists('./src/README.md'));
console.log( v_fs.vExists('./src/LICENSE'));
console.log( v_fs.vExists('./src/.gitignore'));
console.log( v_fs.vExists('./src/src/v_exists.js'));
console.log( v_fs.vExists('./src/package.json'));


