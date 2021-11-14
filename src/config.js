const path = require('path');
console.log(path.join(__dirname, '../'));

const config = {
    webpack: require('../webpack.config.js'),
    devMode:()=> {
      return (this.webpack.mode === "development") ? true : false;
    }
  }

  
module.exports = config;