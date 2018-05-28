import path from 'path';
import merge from 'webpack-merge';

import OfflinePlugin from 'offline-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import BaseWebpackConfig from './webpack.config.base.babel';

export default merge(BaseWebpackConfig, {
  // override default optimization, add OptimizeCSSAssetsPlugin support, consider remove this after webpack v5
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  // The point or points to enter the application.
  entry: {
    app: './frontend/src/index',
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

  // A list of used webpack plugins
  plugins: [
    // It's always better if OfflinePlugin is the last plugin added
    new OfflinePlugin(),
  ],

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'source-map',

  // Turn off performance hints (assets size limit)
  performance: {
    hints: false,
  },
});
