const path = require('path');
const fileMessage = "Hello World Written To A Demo Test TXT File";
const demoDir = path.join(__dirname, './demo-mkdir');
const demoDirSync = path.join(__dirname, './demo-mkdir-sync');
const testFileName = path.join(demoDir, 'demo-test.txt');
const testFileNameSync = path.join(demoDirSync, 'demo-test-sync.txt');

const testConfig = {
  fileMessage,
  demoDir,
  demoDirSync,
  testFileName,
  testFileNameSync
};

//console.log(testConfig);

module.exports = testConfig;
