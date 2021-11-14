const v_fs = require('../index');
const path = require('path');
const demoText = "Yea Some SpaceFiller";

const demoDir = path.join(__dirname, './list_dir_test');
const demoFile = path.join(demoDir, 'sample_file.doc');
const demoFile2 = path.join(demoDir, 'sample_file.txt');

const testArray = ["sample_file.doc", "sample_file.txt"];


test('mkdirSync [bad]', async () => {
  expect(v_fs.mkdirSync(demoFile)).toEqual(false);
});

test('mkdirSync [ok]', async () => {
  expect(v_fs.mkdirSync(demoDir)).toEqual(true);
});

test('mkdirSync [err]', async () => {
  expect(v_fs.mkdirSync()).toEqual(false);
});


test('writeSync [ok]', async () => {
  expect(v_fs.writeSync(demoFile, demoText)).toEqual(true);
});

  test('writeSync [ok]', async () => {
    expect(v_fs.writeSync(demoFile2, demoText)).toEqual(true);
  });

  test('writeSync [bad]', async () => {
    expect(v_fs.writeSync(demoDir,demoText)).toEqual(false);
  });

  test('writeSync [err]', async () => {
    expect(v_fs.writeSync()).toEqual(false);
  });




  test('readSync [ok]', async () => {
    expect(v_fs.readSync(demoFile)).toEqual(demoText);
  });

  test('readSync [bad]', async () => {
    expect(v_fs.readSync(demoDir)).toEqual(false);
  });

  test('readSync [err]', async () => {
    expect(v_fs.readSync()).toEqual(false);
  });




  test('isDirSync [bad]', async () => {
    expect(v_fs.isDirSync(demoFile)).toEqual(false);
  });

  test('isDirSync [ok]', async () => {
    expect(v_fs.isDirSync(demoDir)).toEqual(true);
  });

  test('isDirSync [err]', async () => {
    expect(v_fs.isDirSync()).toEqual(false);
  });



  test('isFileSync [ok]', async () => {
    expect(v_fs.isFileSync(demoFile)).toEqual(true);
  });

  test('isFileSync [bad]', async () => {
    expect(v_fs.isFileSync(demoDir)).toEqual(false);
  });

  test('isFileSync [err]', async () => {
    expect(v_fs.isFileSync()).toEqual(false);
  });




  test('listDirSync [ok]', async () => {
    expect(v_fs.listDirSync(path.join(__dirname, './list_dir_test'))).toEqual(testArray);
  });

  test('listDirSync [emptyPath=>error]', async () => {
    expect( v_fs.listDirSync()).toEqual(false);
  });







  test('deleteFileSync [ok]', async () => {
    expect(v_fs.deleteFileSync(demoFile)).toEqual(true);
  });

  test('deleteFileSync [bad]', async () => {
    expect(v_fs.deleteFileSync(demoDir)).toEqual(false);
  });

  test('deleteFileSync [err]', async () => {
    expect(v_fs.deleteFileSync()).toEqual(false);
  });





  test('removeDirSync [bad]', async () => {
    expect(v_fs.removeDirSync(demoFile)).toEqual(false);
  });

  test('removeDirSync [bad]', async () => {
    expect(v_fs.removeDirSync(demoDir)).toEqual(true);
  });

  test('removeDirSync [err]', async () => {
    expect(v_fs.removeDirSync()).toEqual(false);
  });















//byteSizer

test('1024 Bytes => 1 KB ', async () => {
  expect(v_fs.byteSizer.byteToKilo(1024)).toBe(1);
});

test('1048576 Bytes => 1 MB ', async () => {
  expect(v_fs.byteSizer.byteToMega(1048576)).toBe(1);
});

test('1073741824 Bytes => 1 GB ', async () => {
  expect(v_fs.byteSizer.byteToGiga(1073741824)).toBe(1);
});

test('1099511627776 Bytes => 1 TB', async () => {
  expect(v_fs.byteSizer.byteToTera(1099511627776)).toBe(1);
});




test('`1 KB => 1024 Byte ', async () => {
  expect(v_fs.byteSizer.kiloToByte(1)).toBe(1024);
});

test('1024 KB => 1 MB ', async () => {
  expect(v_fs.byteSizer.kiloToMega(1024)).toBe(1);
});

test('1048576 KB => 1 GB ', async () => {
  expect(v_fs.byteSizer.kiloToGiga(1048576)).toBe(1);
});

test('1073741824 KB => 1 TB ', async () => {
  expect(v_fs.byteSizer.kiloToTera(1073741824)).toBe(1);
});


test('1 MB =>  1048576 Byte  ', async () => {
  expect(v_fs.byteSizer.megaToByte(1)).toBe(1048576);
});

test('1 MB => 1024 KB ', async () => {
  expect(v_fs.byteSizer.megaToKilo(1)).toBe(1024);
});

test('1024 MB => 1024 GB ', async () => {
  expect(v_fs.byteSizer.megaToGiga(1024)).toBe(1);
});

test('1048576 MB => 1048576 TB', async () => {
  expect(v_fs.byteSizer.megaToTera(1048576)).toBe(1);
});


test('1 GB =>  1073741824 Byte', async () => {
  expect(v_fs.byteSizer.gigaToByte(1)).toBe(1073741824);
});

test('1 GB => 1048576 KB ', async () => {
  expect(v_fs.byteSizer.gigaToKilo(1)).toBe(1048576);
});

test('1 GB => 1024 MB', async () => {
  expect(v_fs.byteSizer.gigaToMega(1)).toBe(1024);
});

test('1024 GB => 1 TB', async () => {
  expect(v_fs.byteSizer.gigaToTera(1024)).toBe(1);
});


test('1 TB => 1099511627776Byte ', async () => {
  expect(v_fs.byteSizer.teraToByte(1)).toBe(1099511627776);
});

test('1 TB => 1073741824KB  ', async () => {
  expect(v_fs.byteSizer.teraToKilo(1)).toBe(1073741824);
});

test('1 TB => 1048576MB ', async () => {
  expect(v_fs.byteSizer.teraToMega(1)).toBe(1048576);
});

test('1 TB => 1024GB ', async () => {
  expect(v_fs.byteSizer.teraToGiga(1)).toBe(1024);
});









