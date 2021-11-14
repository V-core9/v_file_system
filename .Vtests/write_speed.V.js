const v_fs = require('../index');
const path = require('path');

const demoText = "YEA CONTENT FOR IT Yea Some Space Filler";
const demoDir = path.join(__dirname, './list_dir_test_promise');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const testArray = ["sample_file.doc", "sample_file.txt"];

const numberOfWrites = 1000;

console.time('SYNC WRITE '+numberOfWrites);
for (let i = 0; i < numberOfWrites; i++) {
  v_fs.sync.write(path.join(demoDir, 'sample_file_'+i+'.txt'), demoText);  
}
console.timeEND('SYNC WRITE '+numberOfWrites);

console.time('SYNC REMOVE '+numberOfWrites);
for (let i = 0; i < numberOfWrites; i++) {
  v_fs.sync.remove(path.join(demoDir, 'sample_file_'+i+'.txt'));  
}
console.timeEND('SYNC REMOVE '+numberOfWrites);
