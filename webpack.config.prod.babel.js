import path from 'path';
import webpack from 'webpack';
import cssnext from 'postcss-cssnext';

import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

// eslint-disable-next-line import/no-unresolved
import * as ReactManifest from './frontend/dist/dll/react_manifest.json';

export default {
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
        include: path.resolve(__dirname, 'frontend/src/'),
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
      // Use ExtractTextPlugin and list of loaders to load and compile scss files to css files
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'frontend/src/'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      // Use file-loader and image-loader to load images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: path.resolve(__dirname, 'frontend/src/'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          {
            loader: 'image-webpack-loader',
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
    // Minimize javascript files with source map generated
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      sourceMap: true,
    }),
    // Use cssnext in postcss when loading scss
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/,
      options: {
        postcss: {
          plugins: [cssnext],
        },
      },
    }),
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
    // Load pre-build react dll reference files
    new webpack.DllReferencePlugin({
      manifest: ReactManifest,
      context: __dirname,
    }),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      title: 'title',
      template: 'frontend/template/index.ejs',
    }),
    // Add dll reference files to html
    new AddAssetHtmlPlugin({
      filepath: 'frontend/dist/dll/react_dll.js',
      includeSourcemap: false,
    }),
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
  },

  // Source map mode
  // https://webpack.js.org/configuration/devtool
  devtool: 'source-map',
};
