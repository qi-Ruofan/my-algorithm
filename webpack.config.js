const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts' // 将./src/index.js修改为index.ts
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            //问题：默认处理不了 html 中的 img 图片
            //处理图片资源
            test: /\.(jpg|png|gif)$/,
            //使用一个loader
            //下载url-loader file-loader
            loader: 'url-loader',
            options: {
                //图片大小小于8kb,就会被base64处理
                //优点:减少请求数量(减轻服务器压力)
                //缺点:图片体积会更大(文件请求速度更慢)
                limit: 8 * 1024,
                //问题:因为url-loader默认使用es6模块化解析, 而html-loader默认引入图片是commonjs
                //解析时会出问题: [object Module]
                //解决:关闭url-loader的es6模块化,使用commonjs解析
                esModule: false,
                // 给图片进行重命名
                //[hash:10]取图片的hash的前10位
                // [ext]取文件原来扩展名
                name: '[hash:10].[ext]',
                //设置输出目录，将打包的图片资源放到imgs文件夹
                outputPath: './imgs'
            }
        },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template:'./src/tpl/index.html',
      filename: 'index.html',
      minify:false
    }),
  ],
  devServer: {
    static: './dist'
  }
}
