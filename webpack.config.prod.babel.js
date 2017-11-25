import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import postcssCssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OfflinePlugin from 'offline-plugin';

import BaseWebpackConfig from './webpack.config.base.babel';

export default merge(BaseWebpackConfig, {
  // Start entry point(s)
  entry: {
    app: [
      './frontend/src/index',
    ],
  },

  // Affecting the output of the compilation
  output: {
    // path: the output directory as an absolute path (required)
    path: path.resolve(__dirname, 'frontend/dist/prod'),
    // filename: specifies the name of output file on disk (required)
    filename: '[name].[chunkhash:10].js',
    // publicPath: specifies the server-relative URL of the output resource directory
    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: '/',
  },

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use ExtractTextPlugin and list of loaders to load css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } }, // https://github.com/webpack-contrib/css-loader#importloaders
            { loader: 'postcss-loader', options: { plugins: () => [postcssImport, postcssCssnext] } },
          ],
        }),
      },
      // Use ExtractTextPlugin and list of loaders to load scss files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 2 } },
            { loader: 'postcss-loader', options: { plugins: () => [postcssImport, postcssCssnext] } },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ],
  },

  // A list of used webpack plugins
  plugins: [
    // Minimize javascript files with source map generated
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      sourceMap: true,
    }),
    // Module concatenation optimization from webpack v3
    new webpack.optimize.ModuleConcatenationPlugin(),
    // Better webpack module name display
    new webpack.HashedModuleIdsPlugin(),
    // Define production env which shaved off 75% of the build output size
    // http://moduscreate.com/optimizing-react-es6-webpack-production-build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Extract css part from javascript bundle into a file
    new ExtractTextPlugin('[name].[contenthash:10].css'),
    // It's always better if OfflinePlugin is the last plugin added
    new OfflinePlugin(),
  ],

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'source-map',
});
