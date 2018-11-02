import 'dotenv/config'; // Allow webpack config file to use .env variables

import path from 'path';
import webpack from 'webpack';

import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DotenvPlugin from 'dotenv-webpack';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';

const ReactManifest = './frontend/dist/dll/react_manifest.json';
const I18nextManifest = './frontend/dist/dll/i18next_manifest.json';
const ImmutableManifest = './frontend/dist/dll/immutable_manifest.json';
const MaterializeManifest = './frontend/dist/dll/materialize_manifest.json';
const devMode = process.env.NODE_ENV !== 'production';

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Get mode from NODE_ENV
  mode: process.env.NODE_ENV,

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use awesome-typescript-loader and babel-loader for ts(x) files
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'awesome-typescript-loader',
            options: {
              silent: true,
              // Use those two flags to speed up babel compilation
              // https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader
              useBabel: true,
              useCache: true,
              // Workaround for at-loader not respecting "exclude" property
              // https://github.com/s-panferov/awesome-typescript-loader/issues/492
              reportFiles: [
                'frontend/src/**/*.{ts,tsx}',
              ],
            },
          },
          // Alternatively, we can use ts-loader
          // { loader: 'ts-loader' },
        ],
      },
      // Use a list of loaders to load materialize and prism css files
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !devMode,
              importLoaders: 1,
            },
          }, // TODO: enable sourceMap in devMode without FOUC
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [postcssImport, postcssPresetEnv, cssnano],
            },
          },
        ],
      },
      // Use a list of loaders to load scss files
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !devMode,
              importLoaders: 2,
              modules: true,
              localIdentName: '[local]--[hash:base64:8]',
            },
          }, // TODO: enable sourceMap in devMode without FOUC
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [postcssImport, postcssPresetEnv, cssnano],
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // Use image-webpack-loader and url-loader to load images
      {
        test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000, name: '[name].[hash:7].[ext]' } },
          { loader: 'image-webpack-loader', options: { disable: devMode } },
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
    // Enforces case sensitive paths.
    new CaseSensitivePathsPlugin(),
    // Supports dotenv file
    new DotenvPlugin(),
    // Warns when multiple versions of the same package exist in a build
    new DuplicatePackageCheckerPlugin(),
    // Load pre-build dll reference files
    new webpack.DllReferencePlugin({ manifest: ReactManifest }),
    new webpack.DllReferencePlugin({ manifest: I18nextManifest }),
    new webpack.DllReferencePlugin({ manifest: ImmutableManifest }),
    new webpack.DllReferencePlugin({ manifest: MaterializeManifest }),
    // Extract css part from javascript bundle into separated file
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].css',
    }),
    // Better building progress display
    new ProgressBarWebpackPlugin(),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: path.resolve(__dirname, 'frontend/public/index.ejs'),
    }),
    // Add dll reference files to html
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'frontend/dist/dll/*_dll.js'),
      includeSourcemap: false,
    }),
    // Copy static files to build dir
    new CopyWebpackPlugin([
      {
        from: 'frontend/public/**/*',
        to: '[name].[ext]',
        ignore: ['index.ejs'],
      },
    ]),
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
      '.css',
      '.scss',
    ],
  },
};
