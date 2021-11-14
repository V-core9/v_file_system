const v_fs = require('../src');
const testConfig = require('./_test_config');

syncTest = () => {

  console.log(`Make Dir Sync : ${v_fs.mkdirSync(testConfig.demoDirSync)}`);

  console.log(`Write Sync : ${v_fs.writeSync(testConfig.testFileNameSync, testConfig.fileMessage, "utf8")}`);

  console.log(`List Dir Sync : ${v_fs.listDirSync(testConfig.demoDirSync)}`);

  console.log(`Read Sync : ${v_fs.readSync(testConfig.testFileNameSync)}`);
  
  console.log(`Is File Sync [dir] : ${v_fs.isFileSync(testConfig.demoDirSync)}`);
  console.log(`Is File Sync [file] : ${v_fs.isFileSync(testConfig.testFileNameSync)}`);

  console.log(`Is Dir Sync [file] : ${v_fs.isDirSync(testConfig.testFileNameSync)}`);
  console.log(`Is Dir Sync [dir] : ${v_fs.isDirSync(testConfig.demoDirSync)}`);

  console.log(`Delete File : ${v_fs.deleteFileSync(testConfig.testFileNameSync)}`);

  console.log(`Remove Dir : ${v_fs.removeDirSync(testConfig.demoDirSync)}`);
};

syncTest();
module.exports = syncTest;
