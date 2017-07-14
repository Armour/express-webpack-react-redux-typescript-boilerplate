import path from 'path';
import webpack from 'webpack';
import postcssCssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import * as ReactManifest from './frontend/dist/dll/react_manifest.json'; // eslint-disable-line import/no-unresolved
import * as ImmutableManifest from './frontend/dist/dll/immutable_manifest.json'; // eslint-disable-line import/no-unresolved
import * as MaterializeManifest from './frontend/dist/dll/materialize_manifest.json'; // eslint-disable-line import/no-unresolved
import * as MiscManifest from './frontend/dist/dll/misc_manifest.json'; // eslint-disable-line import/no-unresolved

const isProfiling = process.env.profiling;

let config = {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

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
    // Use hash string to handle client side cache problem
    filename: '[name]-[chunkhash:10].js',
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
            'sass-loader',
          ],
        }),
      },
      // Use file-loader and image-loader to load images
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

  // A list of used webpack plugins
  plugins: [
    // Better building progress display
    new ProgressBarWebpackPlugin({
      clear: false,
    }),
    // Minimize javascript files with source map generated
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      sourceMap: true,
    }),
    // Module concatenation optimization from webpack v3
    new webpack.optimize.ModuleConcatenationPlugin(),
    // Define production env which shaved off 75% of the build output size
    // http://moduscreate.com/optimizing-react-es6-webpack-production-build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
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
      { filepath: 'frontend/dist/dll/immutable_dll.js', includeSourcemap: false },
      { filepath: 'frontend/dist/dll/materialize_dll.js', includeSourcemap: false },
      { filepath: 'frontend/dist/dll/misc_dll.js', includeSourcemap: false },
    ]),
    // Extract css part from javascript bundle into a file
    new ExtractTextPlugin('[name]-[contenthash:10].css'),
    // Better hash for [hash] and [chunkhash]
    new WebpackMd5Hash(),
  ],

  // Change how modules are resolved
  resolve: {
    // What directories should be searched when resolving modules
    modules: [
      'node_modules',
      'frontend/src',
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
  },

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'source-map',
};

// Profiling
if (isProfiling) {
  config = {
    ...config,
    plugins: [
      // Extend base config
      ...config.plugins,
      // Webpack bundle analyzer for profiling
      new BundleAnalyzerPlugin({
        analyzerPort: 3003,
      }),
    ],
  };
}

// Export const (import/no-mutable-exports)
const constConfig = config;

export default constConfig;
