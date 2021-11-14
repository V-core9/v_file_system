const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [sync]";
const demoDir = path.join(__dirname, './list_dir_test_sync');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
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


test('writeSync [ok]', async () => {
  expect(v_fs.sync.write(demoFile, demoText)).toEqual(true);
});

test('writeSync [ok]', async () => {
  expect(v_fs.sync.write(demoFile2, demoText)).toEqual(true);
});

test('writeSync [bad]', async () => {
  expect(v_fs.sync.write(demoDir, demoText)).toEqual(false);
});

test('writeSync [err]', async () => {
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




test('dirStats [ok]', async () => {
  expect(v_fs.sync.dirStats(demoFile)).toEqual(false);
});


test('dirStats [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(v_fs.sync.dirStats(demoDir)).toEqual(testVal);
});

test('dirStats [err]', async () => {
  expect(v_fs.sync.dirStats()).toEqual(false);
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











