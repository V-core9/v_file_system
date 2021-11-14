const v_fs = require('../index');
const path = require('path');
const testArray = ["sample_file.doc", "sample_file.txt"];

  test('listDirSync [ok]', async () => {
    expect(v_fs.listDirSync(path.join(__dirname, './list_dir_test'))).toEqual(testArray);
  });

  test('listDirSync [emptyPath=>error]', async () => {
    expect( v_fs.listDirSync()).toEqual(false);
  });
