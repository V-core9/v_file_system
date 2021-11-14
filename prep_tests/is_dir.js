const v_fs = require('../index');
const path = require('path');


const isDirTest = async () => {
  test('Check isFile on Dir ', async () => {
    expect(await v_fs.isDir(path.join(__dirname, '.'))).toBe(true);
  });
};

const isFileDirTest = async () => {
  test('Check isFile on Dir ', async () => {
    expect(await v_fs.isDir(path.join(__dirname, './is_file.test.js'))).toBe(false);
  });
};

const isDirTestErr = async () => {
  test('Check isFile Err ', async () => {
    expect(await v_fs.isDir()).toBe(false);
  });
};

isDirTest();
isFileDirTest();
isDirTestErr();
