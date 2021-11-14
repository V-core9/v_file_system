const v_fs = require('../index');
const path = require('path');
const writeCount = require(path.join(__dirname,'./_write_count'));
const demoText = "YEA CONTENT FOR IT Yea Some Space Filler";

console.time('SYNC WRITE '+writeCount);
for (let i = 0; i < writeCount; i++) {
  v_fs.sync.write(path.join(__dirname, 'sample_file_'+i+'.txt'), demoText);  
}
console.timeEnd('SYNC WRITE '+writeCount);

  
console.time('SYNC DELETE '+writeCount);
for (let i = 0; i < writeCount; i++) {
  v_fs.sync.deleteFile(path.join(__dirname, 'sample_file_'+i+'.txt'));  
}
console.timeEnd('SYNC DELETE '+writeCount);

