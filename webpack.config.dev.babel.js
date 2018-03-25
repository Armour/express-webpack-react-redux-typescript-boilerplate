import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import postcssCssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';

import BaseWebpackConfig from './webpack.config.base.babel';

export default merge(BaseWebpackConfig, {
  // Development mode
  mode: 'development',

  // Start entry point(s)
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './frontend/src/index',
    ],
  },

  // Affecting the output of the compilation
  output: {
    // path: the output directory as an absolute path (required)
    path: path.resolve(__dirname, 'frontend/dist/dev'),
    // filename: specifies the name of output file on disk (required)
    filename: '[name].[hash:10].js',
    // publicPath: specifies the server-relative URL of the output resource directory
    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: '/',
  },

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use a list of loaders to load css files
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } }, // https://github.com/webpack-contrib/css-loader#importloaders
          { loader: 'postcss-loader', options: { plugins: () => [postcssImport, postcssCssnext] } },
        ],
      },
      // Use a list of loaders to load scss files
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'postcss-loader', options: { plugins: () => [postcssImport, postcssCssnext] } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  // A list of used webpack plugins
  plugins: [
    // Enable hot module reload, if have --hot parameter in npm script, then this line must be removed!
    new webpack.HotModuleReplacementPlugin(),
  ],

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'eval',
});
