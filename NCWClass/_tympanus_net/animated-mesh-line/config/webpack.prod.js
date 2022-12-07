const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonConfig = require('./webpack.common.js');


// HACK
// Inject into the css the extracter loader instead of the style-loader
commonConfig.module.rules[1].use[0] = MiniCssExtractPlugin.loader;

// MERGE
module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([commonConfig.output.path], { root: path.resolve(__dirname, '..'), verbose: true }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: 'vendors.css',
    }),
  ],
  optimization: {
    nodeEnv: 'production',
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      // include all types of chunks (JS, CCS, ...)
      chunks: 'all',
      name: 'vendors',
    },
  },
});