var path = require('path');
var webpack = require("webpack");
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: isProduction ? './src/index.js' : './main.js',
  output: {
    filename: isProduction ? 'index.js' : 'main.js',
    path: isProduction ? path.resolve(process.cwd(), './lib') : path.resolve(process.cwd(), './dist'),
  },
  devtool: isProduction ? '' : 'cheap-module-source-map',
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, "packages")
      ],
      use: "babel-loader"
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader'
      ]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100'
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
  ],
  devServer: {
    contentBase: './lib',
    hot: true,
    compress: true,
    host: 'localhost',
    port: 6060,
    open: true,
    inline: true,
    progress: true, //显示打包的进度
  }
}

if (isProduction) {
  module.exports.output = Object.assign(module.exports.output, {
    library: 'vue-element-layout',
    libraryTarget: 'umd',
    umdNamedDefine: true
  });
  module.exports.plugins.push(new CleanWebpackPlugin());
  module.exports.resolve = {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
    module.exports.externals = {
      'vue': 'Vue',
      'element-ui': 'element',
    }
} else {
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      title: 'vue-element-layout',
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    }),
  );
}
