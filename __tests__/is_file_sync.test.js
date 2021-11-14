const v_fs = require('../index');
const path = require('path');

  test('isFileSync [ok]', async () => {
    expect(v_fs.isFileSync(path.join(__dirname, './list_dir_test/sample_file.doc'))).toEqual(true);
  });

  test('isFileSync [bad]', async () => {
    expect(v_fs.isFileSync(path.join(__dirname, './list_dir_test'))).toEqual(false);
  });

  test('isFileSync [err]', async () => {
    expect(v_fs.isFileSync()).toEqual(false);
  });
