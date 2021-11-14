const path = require('path');
const config = require(path.join(__dirname,'../config'));

vTime = (label) => {
  if (config.devMode()) console.time(label);
};

vTimeEnd = (label) => {
  if (config.devMode()) console.timeEnd(label);
};


module.exports = {
    v_log : {
        time : vTime,
        timeEnd : vTimeEnd
    },
    vTime,
    vTimeEnd
}