const fs = require('fs');



const byteSizer = require('./_helpers/byte_sizer');
const sync = require('./sync');
const callback = require('./callback');
const promise = require('./promise');

const v_fs = {
  config: {},
  options: {},
  data: {},
  sync,
  callback,
  promise,
  byteSizer,
};


module.exports = v_fs;
