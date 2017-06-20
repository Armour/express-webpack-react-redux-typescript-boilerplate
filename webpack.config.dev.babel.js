import path from 'path';
import webpack from 'webpack';
import postcssCssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

import * as ReactManifest from './frontend/dist/dll/react_manifest.json'; // eslint-disable-line import/no-unresolved
import * as JqueryManifest from './frontend/dist/dll/jquery_manifest.json'; // eslint-disable-line import/no-unresolved
import * as ImmutableManifest from './frontend/dist/dll/immutable_manifest.json'; // eslint-disable-line import/no-unresolved
import * as MaterializeManifest from './frontend/dist/dll/materialize_manifest.json'; // eslint-disable-line import/no-unresolved
import * as MiscManifest from './frontend/dist/dll/misc_manifest.json'; // eslint-disable-line import/no-unresolved

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Start entry point(s)
  entry: {
    app: [
      // Important! 'react-hot-loader/patch' must goes first
      // https://github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915#diff-efacb933fc2cf0fd7e8dacf55a958839
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './frontend/src/index',
    ],
  },

  // Affecting the output of the compilation
  output: {
    // path: the output directory as an absolute path (required)
    path: path.resolve(__dirname, 'frontend/dist/dev'),
    // filename: specifies the name of output file on disk (required)
    filename: '[name].js',
    // publicPath: specifies the public URL of the output resource directory
    // port number should be the same as backend/config.json http_port
    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: 'http://localhost:3003/',
  },

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use awesome-typescript-loader and babel-loader for ts(x) files
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              // Use those two flags to speed up babel compilation
              // https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader
              useBabel: true,
              useCache: true,
            },
          },
          // Alternatively, we can use ts-loader instead of awesome-typescript-loader
          // {
          //   loader: 'ts-loader',
          // },
        ],
      },
      // Use a list of loaders to load css files
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // https://github.com/webpack-contrib/css-loader#importloaders
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [postcssImport, postcssCssnext],
            },
          },
        ],
      },
      // Use a list of loaders to load scss files
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [postcssImport, postcssCssnext],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      // Use url-loader to load images in development
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      // Use file-loader to load font related files and icon
      {
        test: /\.(eot|woff2?|ttf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Enable hot module reload, if have --hot parameter in npm script, then this line must be removed!
    new webpack.HotModuleReplacementPlugin(),
    // Better webpack module name display
    new webpack.NamedModulesPlugin(),
    // Better building progress display
    new ProgressBarWebpackPlugin({
      clear: false,
    }),
    // jQuery support
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',
    }),
    // Load pre-build dll reference files
    new webpack.DllReferencePlugin({
      manifest: ReactManifest,
      context: __dirname,
    }),
    new webpack.DllReferencePlugin({
      manifest: JqueryManifest,
      context: __dirname,
    }),
    new webpack.DllReferencePlugin({
      manifest: ImmutableManifest,
      context: __dirname,
    }),
    new webpack.DllReferencePlugin({
      manifest: MaterializeManifest,
      context: __dirname,
    }),
    new webpack.DllReferencePlugin({
      manifest: MiscManifest,
      context: __dirname,
    }),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: 'frontend/template/index.ejs',
    }),
    // Add dll reference files to html
    new AddAssetHtmlPlugin([
      { filepath: 'frontend/dist/dll/react_dll.js', includeSourcemap: false },
      { filepath: 'frontend/dist/dll/jquery_dll.js', includeSourcemap: false },
      { filepath: 'frontend/dist/dll/immutable_dll.js', includeSourcemap: false },
      { filepath: 'frontend/dist/dll/materialize_dll.js', includeSourcemap: false },
      { filepath: 'frontend/dist/dll/misc_dll.js', includeSourcemap: false },
    ]),
    // Better hash for [hash] and [chunkhash]
    new WebpackMd5Hash(),
  ],

  // Change how modules are resolved
  resolve: {
    // What directories should be searched when resolving modules
    modules: [
      'node_modules',
      'frontend/src',
      'frontend/materialize',
    ],
    // Automatically resolve certain extensions (Ex. import 'folder/name(.ext)')
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.scss',
    ],
    // Fixed jquery version related issue that caused by materailze-css
    // https://github.com/Dogfalo/materialize/issues/3676
    alias: {
      jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
    },
  },

  // Disable webpack asset size limit performance warning
  performance: {
    hints: false,
  },

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'eval-source-map',
};
