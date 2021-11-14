const v_fs = require('../index');
const path = require('path');
const testArray = ["sample_file.doc", "sample_file.txt"];

listIt = async () => {
  test('List directory [ok]', async () => {
    expect(await v_fs.listDir(path.join(__dirname, './list_dir_test'))).toEqual(testArray);
  });
};

listItBad = async () => {
  test('List directory [emptyPath=>error]', async () => {
    expect(await v_fs.listDir()).toEqual(false);
  });
};
listIt();
listItBad();
