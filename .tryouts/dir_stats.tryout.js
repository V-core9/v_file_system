const v_fs = require('../index');
const path =require('path');

const dirStatsTest = async() => {
  console.log(await v_fs.dirStats(path.join(__dirname,'.')));
  console.log(await v_fs.dirStats(path.join(__dirname,'./v_config.js')));
};

dirStatsTest();

module.exports = dirStatsTest;
