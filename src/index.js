const v_log = require('./v_log');
const path = require('path');
const vTime = v_log.time;
const vTimeEnd = v_log.timeEnd;

const v_fs = {
  config: require(path.join(__dirname,'config')),
  options: {},
  data: {},
  listDir: () => { },
  listDirSync: () => { },
  write: () => { },
  writeSync: () => { },
  read: (path, cb = null) => {

    console.log("YEA MESSAGE!!");
    cb(path);
    
  },
  readSync: () => { },
};


module.exports = v_fs;
