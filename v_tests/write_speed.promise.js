const v_fs = require('../index');
const path = require('path');
const writeCount = require(path.join(__dirname, './_write_count'));
const demoText = "YEA CONTENT FOR IT Yea Some Space Filler";

writeTest = async () => {
  var res = [];
  for (let i = 0; i < writeCount; i++) {
    res.push(v_fs.promise.write(path.join(__dirname, 'sample_file_' + i + '.txt'), demoText));
  }
  return res;
};

deleteTest = async () => {
  for (let i = 0; i < writeCount; i++) {
    v_fs.promise.deleteFile(path.join(__dirname, 'sample_file_' + i + '.txt'));
  }
};

testSpeed = async () => {
  console.time('ASYNC WRITE ' + writeCount);
  const res1 = await writeTest();
  console.timeEnd('ASYNC WRITE ' + writeCount);
  
  console.time('ASYNC DELETE ' + writeCount);
  const res2 = await deleteTest();
  console.timeEnd('ASYNC DELETE ' + writeCount);
};

testSpeed();
