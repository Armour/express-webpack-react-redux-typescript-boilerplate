import path from 'path';
import webpack from 'webpack';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

const ReactManifest = './frontend/dist/dll/react_manifest.json';
const ImmutableManifest = './frontend/dist/dll/immutable_manifest.json';
const MaterializeManifest = './frontend/dist/dll/materialize_manifest.json';
const MiscManifest = './frontend/dist/dll/misc_manifest.json';

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Minimal log level
  stats: 'minimal',

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
      // Use image-webpack-loader and url-loader to load images
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
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
    // jQuery support
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',
    }),
    // Warns when multiple versions of the same package exist in a build
    new DuplicatePackageCheckerPlugin(),
    // Load pre-build dll reference files
    new webpack.DllReferencePlugin({ manifest: ReactManifest }),
    new webpack.DllReferencePlugin({ manifest: MaterializeManifest }),
    new webpack.DllReferencePlugin({ manifest: ImmutableManifest }),
    new webpack.DllReferencePlugin({ manifest: MiscManifest }),
    // Better building progress display
    new ProgressBarWebpackPlugin({
      clear: false,
    }),
    // Add Progressive Web Application manifest
    new WebpackPwaManifest({
      name: 'Boilerplate',
      short_name: 'Boilerplate',
      description: 'My full-stack boilerplate that using express with webpack, react and typescirpt! (hot module reload and materialize-css supported)',
      background_color: '#2196f3',
      theme_color: '#2196f3',
      orientation: 'portrait',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('frontend/src/images/logo.png'),
          sizes: [16, 32, 96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('frontend/src/images/apple-touch-icon.png'),
          sizes: [120, 152, 167, 180],
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('frontend/src/images/android-icon.png'),
          sizes: [192, 256],
          destination: path.join('icons', 'android'),
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
    // Solve duplicated package issue
    alias: {
      'hash-base': path.resolve(__dirname, 'node_modules/hash-base'),
    },
  },

  // Turn off performance hints (assets size limit)
  performance: {
    hints: false,
  },
};
