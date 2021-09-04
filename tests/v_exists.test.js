/*jshint esversion: 7 */

const [vExists] = require("../src/v_exists");

console.log("\n<=] vExists TESTING [=>>>>>>>\n")
// directory to check if exists
const testList = [
  {
    path : "./uploads",
    res  : false,
  },
  {
    path : "./src",
    res  : false,
  },
  {
    path : "./bin",
    res  : false,
  },
  {
    path : "./_tests",
    res  : false,
  },
  {
    path : "./node_modules",
    res  : true,
  },
  {
    path : "./node_modules/uploads",
    res  : false,
  },
  {
    path : "./node_modules/src",
    res  : false,
  },
  {
    path : "./node_modules/bin",
    res  : false,
  },
  {
    path : "./LICENSE",
    res  : true,
  },
  {
    path : "./node_modules/node_modules",
    res  : false,
  },
  {
    path : "./node_modules/_tests",
    res  : false,
  },
  {
    path : "./.gitignore",
    res  : true,
  },
  {
    path : "./src/v_exists.js",
    res  : true,
  },
  {
    path : "./src/package.json",
    res  : false,
  },
  {
    path : "./src/README.md",
    res  : false,
  },
  {
    path : "./src/LICENSE",
    res  : false,
  },
  {
    path : "./src/.gitignore",
    res  : false,
  },
  {
    path : "./src/package.json",
    res  : false,
  },
  {
    path : "",
    res  : false,
  },
  {
    path : null,
    res  : false,
  },
];

var testStatus = true;
testList.forEach(item => {
  var res = vExists(item.path);
  if ( res !== item.res ) {
    console.log("FAILING TEST AT:");
    console.log(item);
    testStatus = false;
  }
});

console.log("TEST_STATUS:: "+testStatus);

console.log("\n<=] END vExists TESTING [=>>>>>>>\n")
