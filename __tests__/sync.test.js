const v_fs = require('../src');
const testConfig = require('./_test_config');

syncTest = () => {

  console.log(v_fs.mkdirSync(testConfig.demoDirSync));
  console.log(v_fs.writeSync(testConfig.testFileNameSync, testConfig.fileMessage));
  console.log(v_fs.listDirSync(testConfig.demoDirSync));
  console.log(v_fs.readSync(testConfig.testFileNameSync));  

  console.log(v_fs.isFileSync(testConfig.demoDirSync));
  console.log(v_fs.isFileSync(testConfig.testFileNameSync));

  console.log(v_fs.isDirSync(testConfig.testFileNameSync));
  console.log(v_fs.isDirSync(testConfig.demoDirSync));

  console.log(v_fs.deleteFileSync(testConfig.testFileNameSync));
  console.log(v_fs.removeDirSync(testConfig.demoDirSync));
};

syncTest();
module.exports = syncTest;
