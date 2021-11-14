const vTime = (label) => {
  if (v_fs.config.devMode()) console.time(label);
};

const vTimeEnd = (label) => {
  if (v_fs.config.devMode()) console.timeEnd(label);
};


const v_fs = {
  config: {
    webpack: require('../webpack.config'),
    devMode() {
      return (v_fs.config.webpack.mode === "development") ? true : false;
    }
  },
  options: {},
  data: {},
  listDir: () => { },
  listDirSync: () => { },
  write: () => { },
  writeSync: () => { },
  read: () => {
    vTime("Async Read Start");
    setTimeout(() => {
      console.log("YEA MESSAGE!!");
      vTimeEnd("Async Read Start");
    }, 2500);
  },
  readSync: () => { },
};

console.log(v_fs);
console.log(v_fs.config.devMode());

v_fs.read();

module.exports = v_fs;
