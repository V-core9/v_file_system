/*jshint esversion: 7 */

const  vExistsNo = require('../src/v_exists-no');

// directory to check if exists
const dir = './uploads';

console.log( vExistsNo('./uploads'));
console.log( vExistsNo('./src'));
console.log( vExistsNo('./bin'));
console.log( vExistsNo('./_tests'));
console.log( vExistsNo('./node_modules'));
console.log( vExistsNo('./node_modules/uploads'));
console.log( vExistsNo('./node_modules/src'));
console.log( vExistsNo('./node_modules/bin'));
console.log( vExistsNo('./node_modules/_tests'));
console.log( vExistsNo('./node_modules/node_modules'));

console.log( vExistsNo('./README.md'));
console.log( vExistsNo('./LICENSE'));
console.log( vExistsNo('./.gitignore'));
console.log( vExistsNo('./src/v_exists.js'));
console.log( vExistsNo('./src/package.json'));
console.log( vExistsNo('./src/README.md'));
console.log( vExistsNo('./src/LICENSE'));
console.log( vExistsNo('./src/.gitignore'));
console.log( vExistsNo('./src/src/v_exists.js'));
console.log( vExistsNo('./src/package.json'));
