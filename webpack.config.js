const path = require('path');
const src_dir = path.join(__dirname, '/client');
const dist_dir = path.join(__dirname, '/public');

module.exports = {
  entry: `${src_dir}/index.js`,
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: src_dir
      }
    ]
  }
}