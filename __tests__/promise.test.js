const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [promise]";
const demoDir = path.join(__dirname, './list_dir_test_promise');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const testArray = ["sample_file.doc", "sample_file.txt"];

mkdirPromise = async () => {
    expect(await v_fs.promise.mkdir(demoFile)).toEqual(false);
    expect(await v_fs.promise.mkdir(demoDir)).toEqual(true);
    expect(await v_fs.promise.mkdir()).toEqual(false);
};

writePromise = async () => {
    expect(await v_fs.promise.write(demoFile, demoText)).toEqual(true);
    expect(await v_fs.promise.write(demoFile2, demoText)).toEqual(true);
    expect(await v_fs.promise.write(demoDir, demoText)).toEqual(false);
    expect(await v_fs.promise.write()).toEqual(false);
};

readPromise = async () => {
    expect(await v_fs.promise.read(demoFile)).toEqual(demoText);
    expect(await v_fs.promise.read(demoDir)).toEqual(false);
    expect(await v_fs.promise.read()).toEqual(false);
};


dirStats = async () => {
    expect(await v_fs.promise.dirStats(demoFile)).toEqual(false);

    const fs = require('fs');
    const testVal = fs.statSync(demoDir);
    expect(await v_fs.promise.dirStats(demoDir)).toEqual(testVal);

    expect(await v_fs.promise.dirStats()).toEqual(false);
};

isDirPromise = async () => {
    expect(await v_fs.promise.isDir(demoFile)).toEqual(false);
    expect(await v_fs.promise.isDir(demoDir)).toEqual(true);
    expect(await v_fs.promise.isDir()).toEqual(false);
};

isFilePromise = async () => {
    expect(await v_fs.promise.isFile(demoFile)).toEqual(true);
    expect(await v_fs.promise.isFile(demoDir)).toEqual(false);
    expect(await v_fs.promise.isFile()).toEqual(false);
};

listDirPromise = async () => {
    expect(await v_fs.promise.listDir(demoDir)).toEqual(testArray);
    expect(await v_fs.promise.listDir()).toEqual(false);
};

deleteFileTest = async () => {
    expect(await v_fs.promise.deleteFile(demoFile)).toEqual(true);
    expect(await v_fs.promise.deleteFile(demoDir)).toEqual(false);
    expect(await v_fs.promise.deleteFile()).toEqual(false);
  };

removeDirTest = async () => {
    expect(await v_fs.promise.removeDir(demoFile)).toEqual(false);
    expect(await v_fs.promise.removeDir(demoDir)).toEqual(true);
    expect(await v_fs.promise.removeDir()).toEqual(false);
};

test('mkdirPromise Test', async () => {
  const mkdirRes = await mkdirPromise();
});

test('writePromise Test', async () => {
  const writeRes = await writePromise();
});

test('readPromise Test', async () => {
  const readRes = await readPromise();
});

test('dirStats Test', async () => {
  const dirStatsRes = await dirStats();
});

test('isDirPromise Test', async () => {
  const isDirRes = await isDirPromise();
});

test('isFilePromise Test', async () => {
  const isFileRes = await isFilePromise();
});


test('listDirPromise Test', async () => {
  const listRes = await listDirPromise();
});


test('deleteFileTest Test', async () => {
  const deleteRes = await deleteFileTest();
});


test('removeDirTest Test', async () => {
  const removeRes = await removeDirTest();
});








