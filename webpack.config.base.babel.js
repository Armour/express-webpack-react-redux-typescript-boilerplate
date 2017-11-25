import path from 'path';
import webpack from 'webpack';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';

import * as ReactManifest from './frontend/dist/dll/react_manifest.json'; // eslint-disable-line import/no-unresolved
import * as ImmutableManifest from './frontend/dist/dll/immutable_manifest.json'; // eslint-disable-line import/no-unresolved
import * as MaterializeManifest from './frontend/dist/dll/materialize_manifest.json'; // eslint-disable-line import/no-unresolved
import * as MiscManifest from './frontend/dist/dll/misc_manifest.json'; // eslint-disable-line import/no-unresolved

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use awesome-typescript-loader and babel-loader for ts(x) files
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          // Use those two flags to speed up babel compilation
          // https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader
          { loader: 'awesome-typescript-loader', options: { useBabel: true, useCache: true } },
          // Alternatively, we can use ts-loader instead of awesome-typescript-loader
          // { loader: 'ts-loader' },
        ],
        exclude: /node_modules/,
      },
      // Use url-loader to load images in development
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000 } },
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true } },
        ],
      },
      // Use file-loader to load font related files and icon
      {
        test: /\.(eot|woff2?|ttf|ico)$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' } },
        ],
      },
    ],
  },

  // A list of used webpack plugins
  plugins: [
    // jQuery support
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',
    }),
    // Load pre-build dll reference files
    new webpack.DllReferencePlugin({ manifest: ReactManifest }),
    new webpack.DllReferencePlugin({ manifest: MaterializeManifest }),
    new webpack.DllReferencePlugin({ manifest: ImmutableManifest }),
    new webpack.DllReferencePlugin({ manifest: MiscManifest }),
    // Better building progress display
    new ProgressBarWebpackPlugin({
      clear: false,
    }),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: path.resolve(__dirname, 'frontend/template/index.ejs'),
    }),
    // Add dll reference files to html
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'frontend/dist/dll/*_dll.js'), includeSourcemap: false,
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
