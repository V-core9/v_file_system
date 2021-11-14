const v_fs = require('../src/index');
const { vTime, vTimeEnd } = require('../src/v_log')

// Async read test start
startReadTest = (path) => {
  vTime(`Execution Time : [Async Read] < ${path} >`);
  v_fs.read(path, endReadTest);
};
// Async read test callback / finish req.
endReadTest = (path) => {
  vTimeEnd(`Execution Time : [Async Read] < ${path} >`);
};
// And actually trigger it.
startReadTest("sample/demo.txt");
