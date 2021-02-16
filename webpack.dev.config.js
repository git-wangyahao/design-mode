
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',  // 打包入口
  output:{ 
    path: __dirname,
    filename: './release/bundle.js'
  },  // 打包出口

  /**
   * 模块配置
   */

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },


  /**
   * 配置插件
   */

  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  /**
   * 服务器
   */
  devServer : {
    contentBase: path.join(__dirname, './release'), // 从哪里获取文件
    open: true, //自动打开浏览器
    port: 9000 // 端口
  },
} 