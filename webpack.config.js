const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // string (default)
  }
};
