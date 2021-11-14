
const v_fs = {
  config: {
    webpack: require('../webpack.config'),
    devMode () {
      return (v_fs.config.webpack.mode === "development") ? true : false;
    }
  },
  options: {},
  data: {},
  listDir: ()=>{},
  listDirSync: ()=>{},
  write: ()=>{},
  writeSync: ()=>{},
  read: ()=>{},
  readSync: ()=>{},
};

console.log(v_fs);
console.log(v_fs.config.devMode());

module.exports = v_fs;
