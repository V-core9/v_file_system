const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [METHOD]";
const demoDir = path.join(__dirname, './list_dir_test_METHOD');
const demoFile = path.join(demoDir, 'sample_fileMETHOD.doc');
const demoFile2 = path.join(demoDir, 'sample_fileMETHOD2.txt');
const testArray = ["sample_fileMETHOD.doc", "sample_fileMETHOD2.txt"];

const copyFile = path.join(demoDir, 'copy_fileMETHOD.doc');




test('mkdir Test 1', async () => {
  expect(await v_fs.mkdir(demoFile)).toEqual(false);
});

test('mkdir Test 2', async () => {
  expect(await v_fs.mkdir(demoDir)).toEqual(true);
});

test('mkdir Test 3', async () => {
  expect(await v_fs.mkdir()).toEqual(false);
});



test('write Test 1', async () => {
  expect(await v_fs.write(demoFile, demoText)).toEqual(true);
});

test('write Test 2', async () => {
  expect(await v_fs.write(demoFile2, demoText)).toEqual(true);
});

test('write Test 3', async () => {
  expect(await v_fs.write(demoDir, demoText)).toEqual(false);
});

test('write Test 4', async () => {
  expect(await v_fs.write()).toEqual(false);
});



test('readPromise Test 1', async () => {
  expect(await v_fs.read(demoFile)).toEqual(demoText);
});

test('readPromise Test 2', async () => {
  expect(await v_fs.read(demoDir)).toEqual(false);
});

test('readPromise Test 3', async () => {
  expect(await v_fs.read()).toEqual(false);
});



test('dirStatsRes Test 1', async () => {
  expect(await v_fs.statsDir(demoFile)).toEqual(false);
});

test('dirStatsRes Test 2', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(await v_fs.statsDir(demoDir)).toEqual(testVal);
});

test('dirStatsRes  Test 1', async () => {
  expect(await v_fs.statsDir()).toEqual(false);
});



test('statsFile Test 1', async () => {
  expect(await v_fs.statsFile(demoDir)).toEqual(false);
});

test('statsFile Test 2', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoFile);
  expect(await v_fs.statsFile(demoFile)).toEqual(testVal);
});

test('statsFile Test 3', async () => {
  expect(await v_fs.statsFile()).toEqual(false);
});



test('isDir Test 1', async () => {
  expect(await v_fs.isDir(demoFile)).toEqual(false);
});

test('isDir Test 2', async () => {
  expect(await v_fs.isDir(demoDir)).toEqual(true);
});

test('isDir Test 3', async () => {
  expect(await v_fs.isDir()).toEqual(false);
});



test('isFilePromise Test 1', async () => {
  expect(await v_fs.isFile(demoFile)).toEqual(true);
});

test('isFilePromise Test 2', async () => {
  expect(await v_fs.isFile(demoDir)).toEqual(false);
});

test('isFilePromise Test 3', async () => {
  expect(await v_fs.isFile()).toEqual(false);
});



test('copy Test 1', async () => {
  expect(await v_fs.copy()).toEqual(false);
});

test('copy Test 2', async () => {
  expect(await v_fs.copy(demoFile)).toEqual(false);
});

test('copy Test 3', async () => {
  expect(await v_fs.copy(demoFile, copyFile)).toEqual(true);
});


test('deleteFileTest Test 00', async () => {
  expect(await v_fs.deleteFile(copyFile)).toEqual(true);
});


test('listDirPromise Test 1', async () => {
  expect(await v_fs.listDir(demoDir)).toEqual(testArray);
});

test('listDirPromise Test 2', async () => {
  expect(await v_fs.listDir()).toEqual(false);
});



test('deleteFileTest Test 1', async () => {
  expect(await v_fs.deleteFile(demoFile)).toEqual(true);
});

test('deleteFileTest Test 2', async () => {
  expect(await v_fs.deleteFile(demoDir)).toEqual(false);
});

test('deleteFileTest Test 3', async () => {
  expect(await v_fs.deleteFile()).toEqual(false);
});



test('removeDirTest Test 1', async () => {
  expect(await v_fs.removeDir(demoFile)).toEqual(false);
});

test('removeDirTest Test 2', async () => {
  expect(await v_fs.removeDir(demoDir)).toEqual(true);
});

test('removeDirTest Test 3', async () => {
  expect(await v_fs.removeDir()).toEqual(false);
});
