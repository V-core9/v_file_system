const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [promise]";
const demoDir = path.join(__dirname, './list_dir_test_promise');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const testArray = ["sample_file.doc", "sample_file.txt"];

const copyFile1 = path.join(demoDir, 'copy1_fileMETHOD.doc');
const copyFile2 = path.join(demoDir, 'copy2_fileMETHOD.doc');




//? mkdir  - - - - - - - - - - - - -


test('mkdir Test 1', async () => {
  expect(await v_fs.promise.mkdir(demoFile)).toEqual(false);
});

test('mkdir Test 2', async () => {
  expect(await v_fs.promise.mkdir(demoDir)).toEqual(true);
});

test('mkdir Test 3', async () => {
  expect(await v_fs.promise.mkdir()).toEqual(false);
});

//! EOF - mkdir


//? write  - - - - - - - - - - - - -

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

//! EOF - write


//? read  - - - - - - - - - - - - -

test('readPromise Test 1', async () => {
  expect(await v_fs.promise.read(demoFile)).toEqual(demoText);
});

test('readPromise Test 2', async () => {
  expect(await v_fs.promise.read(demoDir)).toEqual(false);
});

test('readPromise Test 3', async () => {
  expect(await v_fs.promise.read()).toEqual(false);
});

//! EOF - read


//? statsDir  - - - - - - - - - - - - -

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

//! EOF - statsDir


//? statsFile  - - - - - - - - - - - - -

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

//! EOF - statsFile


//? isDir  - - - - - - - - - - - - -

test('isDir Test 1', async () => {
  expect(await v_fs.promise.isDir(demoFile)).toEqual(false);
});

test('isDir Test 2', async () => {
  expect(await v_fs.promise.isDir(demoDir)).toEqual(true);
});

test('isDir Test 3', async () => {
  expect(await v_fs.promise.isDir()).toEqual(false);
});

//! EOF - isDir


//? isFile  - - - - - - - - - - - - -

test('isFilePromise Test 1', async () => {
  expect(await v_fs.promise.isFile(demoFile)).toEqual(true);
});

test('isFilePromise Test 2', async () => {
  expect(await v_fs.promise.isFile(demoDir)).toEqual(false);
});

test('isFilePromise Test 3', async () => {
  expect(await v_fs.promise.isFile()).toEqual(false);
});

//! EOF - isFile


//? copy  - - - - - - - - - - - - -

test('Copy Test 1', async () => {
  expect(await v_fs.promise.copy()).toEqual(false);
});

test('copy Test 2', async () => {
  expect(await v_fs.promise.copy(demoFile)).toEqual(false);
});

test('copy Test 3', async () => {
  expect(await v_fs.promise.copy(demoFile, copyFile1)).toEqual(true);
});

test('copy Test 4', async () => {
  expect(await v_fs.promise.copy(copyFile1, copyFile2)).toEqual(true);
});

//? Deleting those 2 copies
test('deleteFile Test 001', async () => {
  expect(await v_fs.promise.deleteFile(copyFile1)).toEqual(true);
});

test('deleteFile Test 002', async () => {
  expect(await v_fs.promise.deleteFile(copyFile2)).toEqual(true);
});

//! EOF - copy



//? listDir   - - - - - - - - - - - - -

test('listDir Promise Test 1', async () => {
  expect(await v_fs.promise.listDir(demoDir)).toEqual(testArray);
});

test('listDir Promise Test 2', async () => {
  expect(await v_fs.promise.listDir()).toEqual(false);
});

//! EOF - listDir



//? deleteFile   - - - - - - - - - - - - -

test('deleteFile Test 1', async () => {
  expect(await v_fs.promise.deleteFile(demoFile)).toEqual(true);
});

test('deleteFile Test 2', async () => {
  expect(await v_fs.promise.deleteFile(demoDir)).toEqual(false);
});

test('deleteFile Test 3', async () => {
  expect(await v_fs.promise.deleteFile()).toEqual(false);
});

//! EOF - deleteFile



//? removeDir   - - - - - - - - - - - - -

test('removeDir Test 1', async () => {
  expect(await v_fs.promise.removeDir(demoFile)).toEqual(false);
});

test('removeDir Test 2', async () => {
  expect(await v_fs.promise.removeDir(demoDir)).toEqual(true);
});

test('removeDir Test 3', async () => {
  expect(await v_fs.promise.removeDir()).toEqual(false);
});

//! EOF - removeDir
