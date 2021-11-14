const v_fs = require('../index');
const path = require('path');

const demoText = "Yea Some Space Filler [promise]";
const demoDir = path.join(__dirname, './list_dir_test_promise');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');
const testArray = ["sample_file.doc", "sample_file.txt"];

function mkdirTest1() {
  test('mkdirPromise [bad]', async () => {
    expect(await v_fs.promise.mkdir(demoFile)).toEqual(false);
  });
}
function mkdirTest2() {
  test('mkdirPromise [ok]', async () => {
    expect(await v_fs.promise.mkdir(demoDir)).toEqual(true);
  });
}
function mkdirTest3() {
  test('mkdirPromise [err]', async () => {
    expect(await v_fs.promise.mkdir()).toEqual(false);
  });
}

function write1() {
  test('writePromise [ok]', async () => {
    expect(await v_fs.promise.write(demoFile, demoText)).toEqual(true);
  });
}
function write2() {
  test('writePromise [ok]', async () => {
    expect(await v_fs.promise.write(demoFile2, demoText)).toEqual(true);
  });
}

function write3() {
  test('writePromise [bad]', async () => {
    expect(await v_fs.promise.write(demoDir, demoText)).toEqual(false);
  });
}

function write4() {
  test('writePromise [err]', async () => {
    expect(await v_fs.promise.write()).toEqual(false);
  });
}




function readPromise1() {
  test('readPromise [ok]', async () => {
    expect(await v_fs.promise.read(demoFile)).toEqual(demoText);
  });
}

function readPromise2() {
  test('readPromise [bad]', async () => {
    expect(await v_fs.promise.read(demoDir)).toEqual(false);
  });
}


function readPromise3() {
  test('readPromise [err]', async () => {
    expect(await v_fs.promise.read()).toEqual(false);
  });
}

mkdirTest1();
mkdirTest2();
mkdirTest3();

write1();
write2();
write3();
write4();

readPromise1();
readPromise2();
readPromise3();



test('dirStats [ok]', async () => {
  expect(await v_fs.promise.dirStats(demoFile)).toEqual(false);
});


test('dirStats [ok]', async () => {
  const fs = require('fs');
  const testVal = fs.statSync(demoDir);
  expect(await v_fs.promise.dirStats(demoDir)).toEqual(testVal);
});

test('dirStats [err]', async () => {
  expect(await v_fs.promise.dirStats()).toEqual(false);
});




test('isDirPromise [bad]', async () => {
  expect(await v_fs.promise.isDir(demoFile)).toEqual(false);
});

test('isDirPromise [ok]', async () => {
  expect(await v_fs.promise.isDir(demoDir)).toEqual(true);
});

test('isDirPromise [err]', async () => {
  expect(await v_fs.promise.isDir()).toEqual(false);
});



test('isFilePromise [ok]', async () => {
  expect(await v_fs.promise.isFile(demoFile)).toEqual(true);
});

test('isFilePromise [bad]', async () => {
  expect(await v_fs.promise.isFile(demoDir)).toEqual(false);
});

test('isFilePromise [err]', async () => {
  expect(await v_fs.promise.isFile()).toEqual(false);
});




test('listDirPromise [ok]', async () => {
  expect(await v_fs.promise.listDir(path.join(__dirname, './list_dir_test'))).toEqual(testArray);
});

test('listDirPromise [emptyPath=>error]', async () => {
  expect(await v_fs.promise.listDir()).toEqual(false);
});







test('deleteFilePromise [ok]', async () => {
  expect(await v_fs.promise.deleteFile(demoFile)).toEqual(true);
});

test('deleteFilePromise [bad]', async () => {
  expect(await v_fs.promise.deleteFile(demoDir)).toEqual(false);
});

test('deleteFilePromise [err]', async () => {
  expect(await v_fs.promise.deleteFile()).toEqual(false);
});





test('removeDirPromise [bad]', async () => {
  expect(await v_fs.promise.removeDir(demoFile)).toEqual(false);
});

test('removeDirPromise [bad]', async () => {
  expect(await v_fs.promise.removeDir(demoDir)).toEqual(true);
});

test('removeDirPromise [err]', async () => {
  expect(await v_fs.promise.removeDir()).toEqual(false);
});











