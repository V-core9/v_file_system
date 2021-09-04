/*jshint esversion: 7 */

const [vExists] = require("../src/v_exists");

console.log("\n<=] vExists TESTING [=>>>>>>>\n")
// directory to check if exists
const dir = "./uploads";

console.log(vExists("./uploads"));
console.log(vExists("./src"));
console.log(vExists("./bin"));
console.log(vExists("./_tests"));
console.log(vExists("./node_modules"));
console.log(vExists("./node_modules/uploads"));
console.log(vExists("./node_modules/src"));
console.log(vExists("./node_modules/bin"));
console.log(vExists("./node_modules/_tests"));
console.log(vExists("./node_modules/node_modules"));

console.log(vExists("./README.md"));
console.log(vExists("./LICENSE"));
console.log(vExists("./.gitignore"));
console.log(vExists("./src/v_exists.js"));
console.log(vExists("./src/package.json"));
console.log(vExists("./src/README.md"));
console.log(vExists("./src/LICENSE"));
console.log(vExists("./src/.gitignore"));
console.log(vExists("./src/src/v_exists.js"));
console.log(vExists("./src/package.json"));

console.log(vExists(""));
console.log(vExists(""));

console.log("\n<=] END vExists TESTING [=>>>>>>>\n")
