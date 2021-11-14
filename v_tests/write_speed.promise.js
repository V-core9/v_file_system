const v_f = require('../index');
const path = require('path');
const writeCount = require(path.join(__dirname,'./_write_count'));
const demoText = "YEA CONTENT FOR IT Yea Some Space Filler";

writeTest = async() => {
console.time('ASYNC WRITE '+writeCount);
for (let i = 0; i < writeCount; i++) {
  v_f.promise.write(path.join(__dirname, 'sample_file_'+i+'.txt'), demoText);  
}
console.timeEnd('ASYNC WRITE '+writeCount);
};

deleteTest = async() => {
console.time('ASYNC DELETE '+writeCount);
for (let i = 0; i < writeCount; i++) {
  v_f.promise.deleteFile(path.join(__dirname, 'sample_file_'+i+'.txt'));  
}
console.timeEnd('ASYNC DELETE '+writeCount);
};

testSpeed = async() => {
  const res1 = await writeTest();
  const res2 = await deleteTest();
};

testSpeed();
