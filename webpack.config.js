const path = require('path');

module.exports = {
  entry: './bundle.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'webpack.bundle.js'
  }
};