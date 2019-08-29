const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode:'production',  
  entry: './src/index.js',
  externals:{lodash:'lodash'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library:'root', // 支持script标签引入方式
    libraryTarget:'umd'  // 支持import，require，const 引入方式, umd 可改为this，window ，就是分别挂在到这俩个变量下面（this.library,window.library）
  },
  plugins: [
    // new CleanWebpackPlugin(),
         
  ],
};