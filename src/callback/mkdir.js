const fs = require('fs');

mkdir = async (path, options = {}, callback = null ) => {
    fs.mkdir(path, options, callback, error => {
      if(error) return;
      callback(path);
    });
};

module.exports = mkdir;
