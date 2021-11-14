const v_fs = require('../src');
const testConfig = require('./_test_config');

asyncTest = async () => {

  v_fs.mkdir(testConfig.demoDir, console.log);

  v_fs.write(testConfig.testFileName, testConfig.fileMessage, console.log, "utf8");

  v_fs.listDir(testConfig.demoDir, console.log);

  v_fs.read(testConfig.testFileName, console.log);

  v_fs.isFile(testConfig.testFileName, console.log);
  v_fs.isFile(testConfig.demoDir, console.log);

  v_fs.isDir(testConfig.testFileName, console.log);
  v_fs.isDir(testConfig.demoDir, console.log);
  
};

asyncTest();
module.exports = asyncTest;
