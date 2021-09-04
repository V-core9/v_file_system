const vFg = {
  info : {
    author : '[-v-]',
    email  : 'xxxxx@xx.xx'
  },
  cfg : {
    devMode : true,
  },
  data : {
    //nothing to add for now just space holder
  }
}

const appMode   = vFg.cfg.mode;
const DevMode   = appMode;
const devM      = DevMode;
const buildMode = devM;


module.exports = [ vFg, DevMode, appMode, devM, buildMode ];
