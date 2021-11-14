const v_fs = require('../index');
const path = require('path');


const isDirTest = async () => {
  test('Check isFile [bad] ', async () => {
    expect(await v_fs.isFile(path.join(__dirname, '.'))).toBe(false);
  });
};

const isFileDirTest = async () => {
  test('Check isFile [OK] ', async () => {
    expect(await v_fs.isFile(path.join(__dirname, './is_file.test.js'))).toBe(true);
  });
};

const isFileTestErr = async () => {
  test('Check isFile [err]', async () => {
    expect(await v_fs.isFile()).toBe(false);
  });
};

isDirTest();
isFileDirTest();
isFileTestErr();
