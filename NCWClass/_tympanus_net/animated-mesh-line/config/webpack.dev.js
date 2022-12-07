const webpack = require('webpack');
const ip = require('ip');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');


const port = 3333;
const ipAdress = ip.address() + ':' + port;
// const myLocalIp = 'http://' + ipAdress + '/';

// MERGE
module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
  // devtool: 'inline-source-map',
  devServer: {
    // compress: true,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': 'true',
    // },
    contentBase: commonConfig.output.path,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    port: port,
    // Release of webpack-dev-server 2.4.3 => https://github.com/webpack/webpack-dev-server/issues/882
    public: ipAdress,
  },
});