const v_fs = require('../src');
const testConfig = require('./_test_config');

asyncTest = async () => {

  v_fs.mkdir(testConfig.demoDir, console.log);

  v_fs.write(testConfig.testFileName, testConfig.fileMessage, console.log, "utf8");
  v_fs.write(testConfig.testFileName + '2', testConfig.fileMessage, console.log, "utf8");


  v_fs.read(testConfig.testFileName, console.log);

  v_fs.isFile(testConfig.testFileName, console.log);
  v_fs.isFile(testConfig.demoDir, console.log);

  v_fs.isDir(testConfig.testFileName, console.log);
  v_fs.isDir(testConfig.demoDir, console.log);

  setTimeout(() => {
    v_fs.listDir(testConfig.demoDir, console.log);
    v_fs.deleteFile(testConfig.testFileName, console.log);
    setTimeout(() => {
      v_fs.deleteFile(testConfig.testFileName + '2', console.log);
      setTimeout(() => {
        v_fs.removeDir(testConfig.demoDir, console.log);
      }, 2000);
    }, 2000);
  }, 2000);


};

asyncTest();
module.exports = asyncTest;
