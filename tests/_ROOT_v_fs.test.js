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
console.log( v_fs.isThere('./node_modules/src'));
console.log( v_fs.isThere('./node_modules/bin'));
console.log( v_fs.isThere('./node_modules/_tests'));
console.log( v_fs.isThere('./node_modules/node_modules'));

console.log( v_fs.isThere('./README.md'));
console.log( v_fs.isThere('./LICENSE'));
console.log( v_fs.isThere('./.gitignore'));
console.log( v_fs.exists('./src/v_exists.js'));
console.log( v_fs.exists('./src/package.json'));
console.log( v_fs.exists('./src/README.md'));
console.log( v_fs.exists('./src/LICENSE'));
console.log( v_fs.exists('./src/.gitignore'));
console.log( v_fs.exists('./src/src/v_exists.js'));
console.log( v_fs.exists('./src/package.json'));





//-> BAD Location
console.log( v_fs.vIsFile('v_fs.js'));
console.log( v_fs.vIsFile('index.js'));

//-> OK Location
console.log( v_fs.vIsFile('src/v_fs.js'));
console.log( v_fs.vIsFile('src/index.js'));

//-> Random Tests
console.log( v_fs.vIsFile('LICENSE'));
console.log( v_fs.vIsFile('package.json'));
console.log( v_fs.vIsFile('.gitignore'));
console.log( v_fs.vIsFile('package.json'));
console.log( v_fs.vIsFile('.eslintrc'));
console.log( v_fs.vIsFile('.editorconfig'));
console.log( v_fs.vIsFile('src/commands/hello.js'));
console.log( v_fs.vIsFile('src/exists.js'));
console.log( v_fs.vIsFile('src/commands/exists.js'));

//-> BAD Location AKA FOLDERS/DIR 
console.log( v_fs.vIsFile('src'));
console.log( v_fs.vIsFile('bin'));
console.log( v_fs.vIsFile('node_modules'));
console.log( v_fs.vIsFile('src/commands'));
console.log( v_fs.vIsFile('./src/commands/'));



//-> BAD Location
console.log( v_fs.vIsDir('v_fs.js'));
console.log( v_fs.vIsDir('index.js'));

//-> OK Location
console.log( v_fs.vIsDir('src/v_fs.js'));
console.log( v_fs.vIsDir('src/index.js'));

//-> Random Tests
console.log( v_fs.vIsDir('LICENSE'));
console.log( v_fs.vIsDir('package.json'));
console.log( v_fs.vIsDir('.gitignore'));
console.log( v_fs.vIsDir('package.json'));
console.log( v_fs.vIsDir('.eslintrc'));
console.log( v_fs.vIsDir('.editorconfig'));
console.log( v_fs.vIsDir('src/commands/hello.js'));
console.log( v_fs.vIsDir('src/exists.js'));
console.log( v_fs.vIsDir('src/commands/exists.js'));

//-> BAD Location AKA FOLDERS/DIR 
console.log( v_fs.vIsDir('src'));
console.log( v_fs.vIsDir('bin'));
console.log( v_fs.vIsDir('node_modules'));
console.log( v_fs.vIsDir('src/commands'));
console.log( v_fs.vIsDir('./src/commands/'));
