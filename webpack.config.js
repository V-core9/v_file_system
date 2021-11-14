const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
