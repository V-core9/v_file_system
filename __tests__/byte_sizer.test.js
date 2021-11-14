const v_f = require('../index');

//v_f.byteSizer

// Bytes
test('1024 Bytes => 1 KB ', async () => {
  expect(v_f.byteSizer.byteToKilo(1024)).toBe(1);
});

test('1048576 Bytes => 1 MB ', async () => {
  expect(v_f.byteSizer.byteToMega(1048576)).toBe(1);
});

test('1073741824 Bytes => 1 GB ', async () => {
  expect(v_f.byteSizer.byteToGiga(1073741824)).toBe(1);
});

test('1099511627776 Bytes => 1 TB', async () => {
  expect(v_f.byteSizer.byteToTera(1099511627776)).toBe(1);
});



// Kilobytes
test('`1 KB => 1024 Byte ', async () => {
  expect(v_f.byteSizer.kiloToByte(1)).toBe(1024);
});

test('1024 KB => 1 MB ', async () => {
  expect(v_f.byteSizer.kiloToMega(1024)).toBe(1);
});

test('1048576 KB => 1 GB ', async () => {
  expect(v_f.byteSizer.kiloToGiga(1048576)).toBe(1);
});

test('1073741824 KB => 1 TB ', async () => {
  expect(v_f.byteSizer.kiloToTera(1073741824)).toBe(1);
});


// Megabyte
test('1 MB =>  1048576 Byte  ', async () => {
  expect(v_f.byteSizer.megaToByte(1)).toBe(1048576);
});

test('1 MB => 1024 KB ', async () => {
  expect(v_f.byteSizer.megaToKilo(1)).toBe(1024);
});

test('1024 MB => 1024 GB ', async () => {
  expect(v_f.byteSizer.megaToGiga(1024)).toBe(1);
});

test('1048576 MB => 1048576 TB', async () => {
  expect(v_f.byteSizer.megaToTera(1048576)).toBe(1);
});


// Gigabyte
test('1 GB =>  1073741824 Byte', async () => {
  expect(v_f.byteSizer.gigaToByte(1)).toBe(1073741824);
});

test('1 GB => 1048576 KB ', async () => {
  expect(v_f.byteSizer.gigaToKilo(1)).toBe(1048576);
});

test('1 GB => 1024 MB', async () => {
  expect(v_f.byteSizer.gigaToMega(1)).toBe(1024);
});

test('1024 GB => 1 TB', async () => {
  expect(v_f.byteSizer.gigaToTera(1024)).toBe(1);
});


// Terabyte
test('1 TB => 1099511627776Byte ', async () => {
  expect(v_f.byteSizer.teraToByte(1)).toBe(1099511627776);
});

test('1 TB => 1073741824KB  ', async () => {
  expect(v_f.byteSizer.teraToKilo(1)).toBe(1073741824);
});

test('1 TB => 1048576MB ', async () => {
  expect(v_f.byteSizer.teraToMega(1)).toBe(1048576);
});

test('1 TB => 1024GB ', async () => {
  expect(v_f.byteSizer.teraToGiga(1)).toBe(1024);
});
