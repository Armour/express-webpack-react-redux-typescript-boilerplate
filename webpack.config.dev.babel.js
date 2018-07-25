import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import BaseWebpackConfig from './webpack.config.base.babel';

export default merge(BaseWebpackConfig, {
  // The point or points to enter the application.
  entry: {
    app: [
      './frontend/src/index',
    ],
  },

  // Affecting the output of the compilation
  output: {
    // path: the output directory as an absolute path (required)
    path: path.resolve(__dirname, 'frontend/dist/dev'),
    // filename: specifies the name of output file on disk (required)
    filename: '[name].[hash:10].js',
  },

  devServer: {
    // Port number for webpack dev server
    port: 3004,
    // Add proxy for api call
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3003/',
        secure: false,
      },
    },
    // Automatically open page
    open: true,
    // Served index.html (contains 404 page in react-router) in place of any 404 responses
    historyApiFallback: true,
    // Enable hot reload
    hot: true,
  },

  // A list of used webpack plugins
  plugins: [
    // Enable hot module reload, if have --hot parameter in npm script, then this line must be removed!
    new webpack.HotModuleReplacementPlugin(),
  ],

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'cheap-module-eval-source-map',
});
