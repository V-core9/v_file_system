const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [promise]";
const demoDir = path.join(__dirname, './list_dir_test_promise');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const testArray = ["sample_file.doc", "sample_file.txt"];




test('mkdir Test 1', async () => {
  expect(await v_fs.promise.mkdir(demoFile)).toEqual(false);
});

test('mkdir Test 2', async () => {
  expect(await v_fs.promise.mkdir(demoDir)).toEqual(true);
});

test('mkdir Test 3', async () => {
  expect(await v_fs.promise.mkdir()).toEqual(false);
});



test('write Test 1', async () => {
  expect(await v_fs.promise.write(demoFile, demoText)).toEqual(true);
});

test('write Test 2', async () => {
  expect(await v_fs.promise.write(demoFile2, demoText)).toEqual(true);
});

test('write Test 3', async () => {
  expect(await v_fs.promise.write(demoDir, demoText)).toEqual(false);
});

test('write Test 4', async () => {
  expect(await v_fs.promise.write()).toEqual(false);
});



test('readPromise Test 1', async () => {
  expect(await v_fs.promise.read(demoFile)).toEqual(demoText);
});

test('readPromise Test 2', async () => {
  expect(await v_fs.promise.read(demoDir)).toEqual(false);
});

test('readPromise Test 3', async () => {
  expect(await v_fs.promise.read()).toEqual(false);
});



test('dirStatsRes Test 1', async () => {
  expect(await v_fs.promise.statsDir(demoFile)).toEqual(false);
});

test('dirStatsRes Test 2', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(await v_fs.promise.statsDir(demoDir)).toEqual(testVal);
});

test('dirStatsRes  Test 1', async () => {
  expect(await v_fs.promise.statsDir()).toEqual(false);
});



test('statsFile Test 1', async () => {
  expect(await v_fs.promise.statsFile(demoDir)).toEqual(false);
});

test('statsFile Test 2', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoFile);
  expect(await v_fs.promise.statsFile(demoFile)).toEqual(testVal);
});

test('statsFile Test 3', async () => {
  expect(await v_fs.promise.statsFile()).toEqual(false);
});



test('isDir Test 1', async () => {
  expect(await v_fs.promise.isDir(demoFile)).toEqual(false);
});

test('isDir Test 2', async () => {
  expect(await v_fs.promise.isDir(demoDir)).toEqual(true);
});

test('isDir Test 3', async () => {
  expect(await v_fs.promise.isDir()).toEqual(false);
});



test('isFilePromise Test 1', async () => {
  expect(await v_fs.promise.isFile(demoFile)).toEqual(true);
});

test('isFilePromise Test 2', async () => {
  expect(await v_fs.promise.isFile(demoDir)).toEqual(false);
});

test('isFilePromise Test 3', async () => {
  expect(await v_fs.promise.isFile()).toEqual(false);
});



test('listDirPromise Test 1', async () => {
  expect(await v_fs.promise.listDir(demoDir)).toEqual(testArray);
});

test('listDirPromise Test 2', async () => {
  expect(await v_fs.promise.listDir()).toEqual(false);
});



test('deleteFileTest Test 1', async () => {
  expect(await v_fs.promise.deleteFile(demoFile)).toEqual(true);
});

test('deleteFileTest Test 2', async () => {
  expect(await v_fs.promise.deleteFile(demoDir)).toEqual(false);
});

test('deleteFileTest Test 3', async () => {
  expect(await v_fs.promise.deleteFile()).toEqual(false);
});



test('removeDirTest Test 1', async () => {
  expect(await v_fs.promise.removeDir(demoFile)).toEqual(false);
});

test('removeDirTest Test 2', async () => {
  expect(await v_fs.promise.removeDir(demoDir)).toEqual(true);
});

test('removeDirTest Test 3', async () => {
  expect(await v_fs.promise.removeDir()).toEqual(false);
});
