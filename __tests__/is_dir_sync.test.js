const v_fs = require('../index');
const path = require('path');

  test('isDirSync [bad]', async () => {
    expect(v_fs.isDirSync(path.join(__dirname, './list_dir_test/sample_file.doc'))).toEqual(false);
  });

  test('isDirSync [ok]', async () => {
    expect(v_fs.isDirSync(path.join(__dirname, './list_dir_test'))).toEqual(true);
  });

  test('isDirSync [err]', async () => {
    expect(v_fs.isDirSync()).toEqual(false);
  });
