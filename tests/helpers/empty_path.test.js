/*jshint esversion: 8 */
const [emptyPATH, notEmptyPATH] = require("../../src/helpers/empty_path");

console.log("\n--< NOW THE NORMAL VERSION >--->>>\n")
console.log(( emptyPATH()));
console.log(( emptyPATH(null)));
console.log(( emptyPATH('')));
console.log(( emptyPATH("")));


console.log(( emptyPATH(22)));
console.log(( emptyPATH(11)));
console.log(( emptyPATH(4)));


console.log(( emptyPATH('YEAA')));
console.log(( emptyPATH('AAAA')));
console.log(( emptyPATH("YEAA")));
console.log(( emptyPATH("AAAA")));


console.log(( notEmptyPATH()));
console.log(( notEmptyPATH(null)));
console.log(( notEmptyPATH('')));
console.log(( notEmptyPATH("")));


console.log(( notEmptyPATH(22)));
console.log(( notEmptyPATH(11)));
console.log(( notEmptyPATH(4)));


console.log(( notEmptyPATH('YEAA')));
console.log(( notEmptyPATH('AAAA')));
console.log(( notEmptyPATH("YEAA")));
console.log(( notEmptyPATH("AAAA")));



console.log("\n--< ALL WILL SHOW {TRUE} IF ALL IS OK >--->>>\n")
console.log(( emptyPATH() === true ));
console.log(( emptyPATH(null) === true ));
console.log(( emptyPATH('') === true ));
console.log(( emptyPATH("") === true ));


console.log(( emptyPATH(22) === false ));
console.log(( emptyPATH(11) === false ));
console.log(( emptyPATH(4) === false ));


console.log(( emptyPATH('YEAA') === false ));
console.log(( emptyPATH('AAAA') === false ));
console.log(( emptyPATH("YEAA") === false ));
console.log(( emptyPATH("AAAA") === false ));


console.log(( notEmptyPATH() === false ));
console.log(( notEmptyPATH(null) === false ));
console.log(( notEmptyPATH('') === false ));
console.log(( notEmptyPATH("") === false ));


console.log(( notEmptyPATH(22) === true ));
console.log(( notEmptyPATH(11) === true ));
console.log(( notEmptyPATH(4) === true ));


console.log(( notEmptyPATH('YEAA') === true ));
console.log(( notEmptyPATH('AAAA') === true ));
console.log(( notEmptyPATH("YEAA") === true ));
console.log(( notEmptyPATH("AAAA") === true ));
console.log("\n-!-< If ALL Show TRUE then OK >-!-->>>\n");
