const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [promise]";
const demoDir = path.join(__dirname, './list_dir_test_promise');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const testArray = ["sample_file.doc", "sample_file.txt"];

mkdirPromiseTest = async () => {
    expect(await v_fs.promise.mkdir(demoFile)).toEqual(false);
    expect(await v_fs.promise.mkdir(demoDir)).toEqual(true);
    expect(await v_fs.promise.mkdir()).toEqual(false);
};

writePromiseTest = async () => {
    expect(await v_fs.promise.write(demoFile, demoText)).toEqual(true);
    expect(await v_fs.promise.write(demoFile2, demoText)).toEqual(true);
    expect(await v_fs.promise.write(demoDir, demoText)).toEqual(false);
    expect(await v_fs.promise.write()).toEqual(false);
};

readPromiseTest = async () => {
    expect(await v_fs.promise.read(demoFile)).toEqual(demoText);
    expect(await v_fs.promise.read(demoDir)).toEqual(false);
    expect(await v_fs.promise.read()).toEqual(false);
};



statsDirPromiseTest1 = async () => {
    expect(await v_fs.promise.statsDir(demoFile)).toEqual(false);
};

statsDirPromiseTest2 = async () => {
    const fs = require('fs');
    const testVal = fs.statSync(demoDir);
    expect(await v_fs.promise.statsDir(demoDir)).toEqual(testVal);
};

statsDirPromiseTest3 = async () => {
    expect(await v_fs.promise.statsDir()).toEqual(false);
};



statsFilePromiseTest1 = async () => {
    expect(await v_fs.promise.statsFile(demoDir)).toEqual(false);
};

statsFilePromiseTest2 = async () => {
    const fs = require('fs');
    const testVal = fs.statSync(demoFile);
    expect(await v_fs.promise.statsFile(demoFile)).toEqual(testVal);
};

statsFilePromiseTest3 = async () => {
    expect(await v_fs.promise.statsFile()).toEqual(false);
};


isDirPromiseTest1 = async () => {
    expect(await v_fs.promise.isDir(demoFile)).toEqual(false);
};

isDirPromiseTest2 = async () => {
    expect(await v_fs.promise.isDir(demoDir)).toEqual(true);
};

isDirPromiseTest3 = async () => {
    expect(await v_fs.promise.isDir()).toEqual(false);
};

isFilePromiseTest = async () => {
    expect(await v_fs.promise.isFile(demoFile)).toEqual(true);
    expect(await v_fs.promise.isFile(demoDir)).toEqual(false);
    expect(await v_fs.promise.isFile()).toEqual(false);
};

listDirPromiseTest = async () => {
    expect(await v_fs.promise.listDir(demoDir)).toEqual(testArray);
    expect(await v_fs.promise.listDir()).toEqual(false);
};

deleteFilePromiseTest = async () => {
    expect(await v_fs.promise.deleteFile(demoFile)).toEqual(true);
    expect(await v_fs.promise.deleteFile(demoDir)).toEqual(false);
    expect(await v_fs.promise.deleteFile()).toEqual(false);
  };

removeDirPromiseTest = async () => {
    expect(await v_fs.promise.removeDir(demoFile)).toEqual(false);
    expect(await v_fs.promise.removeDir(demoDir)).toEqual(true);
    expect(await v_fs.promise.removeDir()).toEqual(false);
};

test('mkdirPromise Test', async () => {
  const mkdirRes = await mkdirPromiseTest();
});

test('writePromise Test', async () => {
  const writeRes = await writePromiseTest();
});

test('readPromise Test', async () => {
  const readRes = await readPromiseTest();
});

test('dirStatsRes1 Test', async () => {
  const dirStatsRes = await statsDirPromiseTest1();
});

test('dirStatsRes2 Test', async () => {
  const dirStatsRes = await statsDirPromiseTest2();
});

test('dirStatsRes3 Test', async () => {
  const dirStatsRes = await statsDirPromiseTest3();
});

test('fileStatsRes1 Test', async () => {
  const fileStatsRes = await statsFilePromiseTest1();
});

test('fileStatsRes2 Test', async () => {
  const fileStatsRes = await statsFilePromiseTest2();
});

test('fileStatsRes3 Test', async () => {
  const fileStatsRes = await statsFilePromiseTest3();
});

test('isDirPromise1 Test', async () => {
  const isDirRes = await isDirPromiseTest1();
});

test('isDirPromise2 Test', async () => {
  const isDirRes = await isDirPromiseTest2();
});

test('isDirPromise3 Test', async () => {
  const isDirRes = await isDirPromiseTest3();
});

test('isFilePromise Test', async () => {
  const isFileRes = await isFilePromiseTest();
});


test('listDirPromise Test', async () => {
  const listRes = await listDirPromiseTest();
});


test('deleteFileTest Test', async () => {
  const deleteRes = await deleteFilePromiseTest();
});


test('removeDirTest Test', async () => {
  const removeRes = await removeDirPromiseTest();
});








