const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [sync]";
const demoDir = path.join(__dirname, './list_dir_SY');
const demoFile = path.join(demoDir, 'sample_fileSY.doc');
const demoFile2 = path.join(demoDir, 'sample_fileSY.txt');
const demoFileRENAME = path.join(demoDir, 'sample_fileRESY.doc');
const testArray = ["sample_fileSY.doc", "sample_fileSY.txt"];

//console.log(v_fs);

test('mkdirSync [bad]', async () => {
  expect(v_fs.mkdirSy(demoFile)).toEqual(false);
});

test('mkdirSync [ok]', async () => {
  expect(v_fs.mkdirSy(demoDir)).toEqual(true);
});

test('mkdirSync [err]', async () => {
  expect(v_fs.mkdirSy()).toEqual(false);
});


test('write Sync [ok]', async () => {
  expect(v_fs.writeSy(demoFile, demoText)).toEqual(true);
});

test('write Sync [ok]', async () => {
  expect(v_fs.writeSy(demoFile2, demoText)).toEqual(true);
});

test('write Sync [bad]', async () => {
  expect(v_fs.writeSy(demoDir, demoText)).toEqual(false);
});

test('write Sync [err]', async () => {
  expect(v_fs.writeSy()).toEqual(false);
});



test('readSync [ok]', async () => {
  expect(v_fs.readSy(demoFile)).toEqual(demoText);
});

test('readSync [bad]', async () => {
  expect(v_fs.readSy(demoDir)).toEqual(false);
});

test('readSync [err]', async () => {
  expect(v_fs.readSy()).toEqual(false);
});



test('statsFile [ok]', async () => {
  expect(v_fs.statsFileSy(demoDir)).toEqual(false);
});


test('statsFile [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoFile);
  expect(v_fs.statsFileSy(demoFile)).toEqual(testVal);
});

test('statsFile [err]', async () => {
  expect(v_fs.statsFileSy()).toEqual(false);
});



test('rename [ok]', async () => {
  expect(v_fs.renameSy(demoFile,demoFileRENAME )).toEqual(true);
});

test('rename [ok]', async () => {
  expect(v_fs.renameSy(demoFileRENAME,demoFile)).toEqual(true);
});

test('rename [bad]', async () => {
  expect(v_fs.renameSy(demoFileRENAME)).toEqual(false);
});


test('rename [bad]', async () => {
  expect(v_fs.renameSy()).toEqual(false);
});



test('statsDir [ok]', async () => {
  expect(v_fs.statsDirSy(demoFile)).toEqual(false);
});

test('statsDir [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(v_fs.statsDirSy(demoDir)).toEqual(testVal);
});

test('statsDir [err]', async () => {
  expect(v_fs.statsDirSy()).toEqual(false);
});



test('isDirSync [bad]', async () => {
  expect(v_fs.isDirSy(demoFile)).toEqual(false);
});

test('isDirSync [ok]', async () => {
  expect(v_fs.isDirSy(demoDir)).toEqual(true);
});

test('isDirSync [err]', async () => {
  expect(v_fs.isDirSy()).toEqual(false);
});



test('isFileSync [ok]', async () => {
  expect(v_fs.isFileSy(demoFile)).toEqual(true);
});

test('isFileSync [bad]', async () => {
  expect(v_fs.isFileSy(demoDir)).toEqual(false);
});

test('isFileSync [err]', async () => {
  expect(v_fs.isFileSy()).toEqual(false);
});



test('listDirSync [ok]', async () => {
  expect(v_fs.listDirSy(demoDir)).toEqual(testArray);
});

test('listDirSync [emptyPath=>error]', async () => {
  expect(v_fs.listDirSy()).toEqual(false);
});



test('deleteFileSync [ok]', async () => {
  expect(v_fs.deleteFileSy(demoFile)).toEqual(true);
});

test('deleteFileSync [bad]', async () => {
  expect(v_fs.deleteFileSy(demoDir)).toEqual(false);
});

test('deleteFileSync [err]', async () => {
  expect(v_fs.deleteFileSy()).toEqual(false);
});



test('removeDirSync [bad]', async () => {
  expect(v_fs.removeDirSy(demoFile)).toEqual(false);
});

test('removeDirSync [bad]', async () => {
  expect(v_fs.removeDirSy(demoDir)).toEqual(true);
});

test('removeDirSync [err]', async () => {
  expect(v_fs.removeDirSy()).toEqual(false);
});
