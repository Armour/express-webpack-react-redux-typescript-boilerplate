import path from 'path';
import webpack from 'webpack';
import postcssCssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

const ReactManifest = './frontend/dist/dll/react_manifest.json';
const ImmutableManifest = './frontend/dist/dll/immutable_manifest.json';
const MaterializeManifest = './frontend/dist/dll/materialize_manifest.json';
const devMode = process.env.NODE_ENV !== 'production';

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Minimal log level
  stats: 'minimal',

  // Get mode from NODE_ENV
  mode: process.env.NODE_ENV,

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use awesome-typescript-loader and babel-loader for ts(x) files
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
          // Use those two flags to speed up babel compilation
          // https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true,
              silent: true,
            },
          },
          // Alternatively, we can use ts-loader instead of awesome-typescript-loader
          // { loader: 'ts-loader' },
        ],
        exclude: /node_modules/,
      },
      // Use babel-loader for js(x) files
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      // Use a list of loaders to load css files
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 1 } }, // TODO: enable sourceMap without FOUC
          { loader: 'postcss-loader', options: { sourceMap: true, plugins: () => [postcssImport, postcssCssnext] } },
        ],
      },
      // Use a list of loaders to load scss files
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 2 } }, // TODO: enable sourceMap without FOUC
          { loader: 'postcss-loader', options: { sourceMap: true, plugins: () => [postcssImport, postcssCssnext] } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // Use image-webpack-loader and url-loader to load images
      {
        test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000, name: '[name].[hash:7].[ext]' } },
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true } },
        ],
      },
      // Use url-loader to load font related files
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000, name: '[name].[hash:7].[ext]' } },
        ],
      },
      // Use url-loader to load audio related files
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000, name: '[name].[hash:7].[ext]' } },
        ],
      },
    ],
  },

  // A list of used webpack plugins
  plugins: [
    // Warns when multiple versions of the same package exist in a build
    new DuplicatePackageCheckerPlugin(),
    // Load pre-build dll reference files
    new webpack.DllReferencePlugin({ manifest: ReactManifest }),
    new webpack.DllReferencePlugin({ manifest: ImmutableManifest }),
    new webpack.DllReferencePlugin({ manifest: MaterializeManifest }),
    // Extract css part from javascript bundle into separated file
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash:10].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash:10].css',
    }),
    // Better building progress display
    new ProgressBarWebpackPlugin(),
    // Add Progressive Web Application manifest
    new WebpackPwaManifest({
      short_name: 'Boilerplate',
      name: 'Boilerplate',
      description: 'My full-stack boilerplate that using express with webpack, react and typescirpt! (hot module reload and materialize-css supported)',
      background_color: '#2196f3',
      theme_color: '#2196f3',
      orientation: 'portrait',
      display: 'standalone',
      icons: [
        {
          src: path.resolve(__dirname, 'frontend/src/images/logo.png'),
          sizes: [192, 512], // Generate general icons
        },
        {
          src: path.resolve(__dirname, 'frontend/src/images/logo.png'),
          sizes: [120, 152, 167, 180],
          destination: path.join('icons', 'ios'),
          ios: true, // Generate apple touch icons
        },
        {
          src: path.resolve(__dirname, 'frontend/src/images/logo.png'),
          sizes: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup', // Generate apple touch startup image
        },
        {
          src: path.resolve(__dirname, 'frontend/src/images/logo.png'),
          sizes: [144, 192, 512],
          destination: path.join('icons', 'android'), // Generate android icons
        },
      ],
    }),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      favicon: path.resolve(__dirname, 'frontend/src/images/favicon.ico'),
      template: path.resolve(__dirname, 'frontend/template/index.ejs'),
    }),
    // Add dll reference files to html
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'frontend/dist/dll/*_dll.js'),
      includeSourcemap: false,
    }),
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
};
