const v_f = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [sync]";
const demoDir = path.join(__dirname, './list_dir_test_sync');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const demoFileRENAME = path.join(demoDir, 'sample_fileRE.doc');
const testArray = ["sample_file.doc", "sample_file.txt"];

//console.log(v_f);

test('mkdirSync [bad]', async () => {
  expect(v_f.sync.mkdir(demoFile)).toEqual(false);
});

test('mkdirSync [ok]', async () => {
  expect(v_f.sync.mkdir(demoDir)).toEqual(true);
});

test('mkdirSync [err]', async () => {
  expect(v_f.sync.mkdir()).toEqual(false);
});


test('write Sync [ok]', async () => {
  expect(v_f.sync.write(demoFile, demoText)).toEqual(true);
});

test('write Sync [ok]', async () => {
  expect(v_f.sync.write(demoFile2, demoText)).toEqual(true);
});

test('write Sync [bad]', async () => {
  expect(v_f.sync.write(demoDir, demoText)).toEqual(false);
});

test('write Sync [err]', async () => {
  expect(v_f.sync.write()).toEqual(false);
});




test('readSync [ok]', async () => {
  expect(v_f.sync.read(demoFile)).toEqual(demoText);
});

test('readSync [bad]', async () => {
  expect(v_f.sync.read(demoDir)).toEqual(false);
});

test('readSync [err]', async () => {
  expect(v_f.sync.read()).toEqual(false);
});




test('statsFile [ok]', async () => {
  expect(v_f.sync.statsFile(demoDir)).toEqual(false);
});


test('statsFile [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoFile);
  expect(v_f.sync.statsFile(demoFile)).toEqual(testVal);
});

test('statsFile [err]', async () => {
  expect(v_f.sync.statsFile()).toEqual(false);
});


test('rename [ok]', async () => {
  expect(v_f.sync.rename(demoFile,demoFileRENAME )).toEqual(true);
});

test('rename [ok]', async () => {
  expect(v_f.sync.rename(demoFileRENAME,demoFile)).toEqual(true);
});

test('rename [bad]', async () => {
  expect(v_f.sync.rename(demoFileRENAME)).toEqual(false);
});


test('rename [bad]', async () => {
  expect(v_f.sync.rename()).toEqual(false);
});


test('statsDir [ok]', async () => {
  expect(v_f.sync.statsDir(demoFile)).toEqual(false);
});


test('statsDir [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(v_f.sync.statsDir(demoDir)).toEqual(testVal);
});

test('statsDir [err]', async () => {
  expect(v_f.sync.statsDir()).toEqual(false);
});




test('isDirSync [bad]', async () => {
  expect(v_f.sync.isDir(demoFile)).toEqual(false);
});

test('isDirSync [ok]', async () => {
  expect(v_f.sync.isDir(demoDir)).toEqual(true);
});

test('isDirSync [err]', async () => {
  expect(v_f.sync.isDir()).toEqual(false);
});



test('isFileSync [ok]', async () => {
  expect(v_f.sync.isFile(demoFile)).toEqual(true);
});

test('isFileSync [bad]', async () => {
  expect(v_f.sync.isFile(demoDir)).toEqual(false);
});

test('isFileSync [err]', async () => {
  expect(v_f.sync.isFile()).toEqual(false);
});




test('listDirSync [ok]', async () => {
  expect(v_f.sync.listDir(demoDir)).toEqual(testArray);
});

test('listDirSync [emptyPath=>error]', async () => {
  expect(v_f.sync.listDir()).toEqual(false);
});







test('deleteFileSync [ok]', async () => {
  expect(v_f.sync.deleteFile(demoFile)).toEqual(true);
});

test('deleteFileSync [bad]', async () => {
  expect(v_f.sync.deleteFile(demoDir)).toEqual(false);
});

test('deleteFileSync [err]', async () => {
  expect(v_f.sync.deleteFile()).toEqual(false);
});





test('removeDirSync [bad]', async () => {
  expect(v_f.sync.removeDir(demoFile)).toEqual(false);
});

test('removeDirSync [bad]', async () => {
  expect(v_f.sync.removeDir(demoDir)).toEqual(true);
});

test('removeDirSync [err]', async () => {
  expect(v_f.sync.removeDir()).toEqual(false);
});











