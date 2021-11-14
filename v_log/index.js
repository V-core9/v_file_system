
const v_config = require('../v_config');

vLogMsg = (msg) => {
  if (v_config.isDev()) console.log(msg);
};

vLogInfo = (msg) => {
  if (v_config.isDev()) console.info(msg);
};

vTime = (label) => {
  if (v_config.isDev()) console.time(label);
};

vTimeEnd = (label) => {
  if (v_config.isDev()) console.timeEnd(label);
};


module.exports = {
    v_log : {
      time: vTime,
      timeEnd: vTimeEnd,
      msg: vLogMsg,
      info: vLogInfo
    },
};
