const fs = require('fs');



const byteSizer = require('./_helpers/byte_sizer');
const sync = require('./sync');
const promise = require('./promise');

const v_f = {
  config: {},
  options: {},
  data: {},
  sync,
  promise,
  byteSizer,
};


module.exports = v_f;
