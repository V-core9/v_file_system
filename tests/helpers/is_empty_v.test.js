/*jshint esversion: 8 */
const isEmptyV = require("../../src/helpers/is_empty_v");

console.log("\n--< ALL WILL SHOW {TRUE} IF ALL IS OK >--->>>\n")
console.log(( isEmptyV() === true ));
console.log(( isEmptyV(null) === true ));
console.log(( isEmptyV('') === true ));
console.log(( isEmptyV("") === true ));


console.log(( isEmptyV(22) === false ));
console.log(( isEmptyV(11) === false ));
console.log(( isEmptyV(4) === false ));


console.log(( isEmptyV('YEAA') === false ));
console.log(( isEmptyV('AAAA') === false ));
console.log(( isEmptyV("YEAA") === false ));
console.log(( isEmptyV("AAAA") === false ));
//--< ALL WILL SHOW {TRUE} IF ALL IS OK >--->>>
console.log("\n-!-< If ALL Show TRUE then OK >-!-->>>\n")


console.log("\n--< NOW THE NORMAL VERSION >--->>>\n")
console.log(( isEmptyV()  ));
console.log(( isEmptyV(null) ));
console.log(( isEmptyV('') ));
console.log(( isEmptyV("")  ));


console.log(( isEmptyV(22)  ));
console.log(( isEmptyV(11)  ));
console.log(( isEmptyV(4) ));


console.log(( isEmptyV('YEAA') ));
console.log(( isEmptyV('AAAA')  ));
console.log(( isEmptyV("YEAA")  ));
console.log(( isEmptyV("AAAA")  ));
