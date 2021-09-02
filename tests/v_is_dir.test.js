const vIsDir = require ('../src/v_is_dir');


//-> BAD Location
console.log(vIsDir('v_fs.js'));
console.log(vIsDir('index.js'));

//-> OK Location
console.log(vIsDir('src/v_fs.js'));
console.log(vIsDir('src/index.js'));

//-> Random Tests
console.log(vIsDir('LICENSE'));
console.log(vIsDir('package.json'));
console.log(vIsDir('.gitignore'));
console.log(vIsDir('package.json'));
console.log(vIsDir('.eslintrc'));
console.log(vIsDir('.editorconfig'));
console.log(vIsDir('src/commands/hello.js'));
console.log(vIsDir('src/exists.js'));
console.log(vIsDir('src/commands/exists.js'));

//-> BAD Location AKA FOLDERS/DIR 
console.log(vIsDir('src'));
console.log(vIsDir('bin'));
console.log(vIsDir('node_modules'));
console.log(vIsDir('src/commands'));
console.log(vIsDir('./src/commands/'));
