const vIsFile = require("../src/v_is_file");

//-> BAD Location
console.log(vIsFile("v_fs.js"));
console.log(vIsFile("index.js"));

//-> OK Location
console.log(vIsFile("src/v_fs.js"));
console.log(vIsFile("src/index.js"));

//-> Random Tests
console.log(vIsFile("LICENSE"));
console.log(vIsFile("package.json"));
console.log(vIsFile(".gitignore"));
console.log(vIsFile("package.json"));
console.log(vIsFile(".eslintrc"));
console.log(vIsFile(".editorconfig"));
console.log(vIsFile("src/commands/hello.js"));
console.log(vIsFile("src/exists.js"));
console.log(vIsFile("src/commands/exists.js"));

//-> BAD Location AKA FOLDERS/DIR
console.log(vIsFile("src"));
console.log(vIsFile("bin"));
console.log(vIsFile("node_modules"));
console.log(vIsFile("src/commands"));
console.log(vIsFile("./src/commands/"));
