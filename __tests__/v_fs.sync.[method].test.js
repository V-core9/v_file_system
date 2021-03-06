const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [sync]";
const demoDir = path.join(__dirname, './list_dir_test_sync');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const demoFileRENAME = path.join(demoDir, 'sample_fileRE.doc');
const testArray = ["sample_file.doc", "sample_file.txt"];

//console.log(v_fs);

test('mkdirSync [bad]', async () => {
  expect(v_fs.sync.mkdir(demoFile)).toEqual(false);
});

test('mkdirSync [ok]', async () => {
  expect(v_fs.sync.mkdir(demoDir)).toEqual(true);
});

test('mkdirSync [err]', async () => {
  expect(v_fs.sync.mkdir()).toEqual(false);
});


test('write Sync [ok]', async () => {
  expect(v_fs.sync.write(demoFile, demoText)).toEqual(true);
});

test('write Sync [ok]', async () => {
  expect(v_fs.sync.write(demoFile2, demoText)).toEqual(true);
});

test('write Sync [bad]', async () => {
  expect(v_fs.sync.write(demoDir, demoText)).toEqual(false);
});

test('write Sync [err]', async () => {
  expect(v_fs.sync.write()).toEqual(false);
});



test('readSync [ok]', async () => {
  expect(v_fs.sync.read(demoFile)).toEqual(demoText);
});

test('readSync [bad]', async () => {
  expect(v_fs.sync.read(demoDir)).toEqual(false);
});

test('readSync [err]', async () => {
  expect(v_fs.sync.read()).toEqual(false);
});



test('statsFile [ok]', async () => {
  expect(v_fs.sync.statsFile(demoDir)).toEqual(false);
});


test('statsFile [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoFile);
  expect(v_fs.sync.statsFile(demoFile)).toEqual(testVal);
});

test('statsFile [err]', async () => {
  expect(v_fs.sync.statsFile()).toEqual(false);
});



test('rename [ok]', async () => {
  expect(v_fs.sync.rename(demoFile,demoFileRENAME )).toEqual(true);
});

test('rename [ok]', async () => {
  expect(v_fs.sync.rename(demoFileRENAME,demoFile)).toEqual(true);
});

test('rename [bad]', async () => {
  expect(v_fs.sync.rename(demoFileRENAME)).toEqual(false);
});


test('rename [bad]', async () => {
  expect(v_fs.sync.rename()).toEqual(false);
});



test('statsDir [ok]', async () => {
  expect(v_fs.sync.statsDir(demoFile)).toEqual(false);
});

test('statsDir [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(v_fs.sync.statsDir(demoDir)).toEqual(testVal);
});

test('statsDir [err]', async () => {
  expect(v_fs.sync.statsDir()).toEqual(false);
});



test('isDirSync [bad]', async () => {
  expect(v_fs.sync.isDir(demoFile)).toEqual(false);
});

test('isDirSync [ok]', async () => {
  expect(v_fs.sync.isDir(demoDir)).toEqual(true);
});

test('isDirSync [err]', async () => {
  expect(v_fs.sync.isDir()).toEqual(false);
});



test('isFileSync [ok]', async () => {
  expect(v_fs.sync.isFile(demoFile)).toEqual(true);
});

test('isFileSync [bad]', async () => {
  expect(v_fs.sync.isFile(demoDir)).toEqual(false);
});

test('isFileSync [err]', async () => {
  expect(v_fs.sync.isFile()).toEqual(false);
});



test('listDirSync [ok]', async () => {
  expect(v_fs.sync.listDir(demoDir)).toEqual(testArray);
});

test('listDirSync [emptyPath=>error]', async () => {
  expect(v_fs.sync.listDir()).toEqual(false);
});



test('deleteFileSync [ok]', async () => {
  expect(v_fs.sync.deleteFile(demoFile)).toEqual(true);
});

test('deleteFileSync [bad]', async () => {
  expect(v_fs.sync.deleteFile(demoDir)).toEqual(false);
});

test('deleteFileSync [err]', async () => {
  expect(v_fs.sync.deleteFile()).toEqual(false);
});



test('removeDirSync [bad]', async () => {
  expect(v_fs.sync.removeDir(demoFile)).toEqual(false);
});

test('removeDirSync [bad]', async () => {
  expect(v_fs.sync.removeDir(demoDir)).toEqual(true);
});

test('removeDirSync [err]', async () => {
  expect(v_fs.sync.removeDir()).toEqual(false);
});
