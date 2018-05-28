import path from 'path';
import webpack from 'webpack';

import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';

const reactVendors = [
  'react',
  'react-dom',
  'react-router-dom',
  'react-redux',
  'react-hot-loader',
  'redux',
  'redux-devtools',
  'redux-devtools-dock-monitor',
  'redux-devtools-log-monitor',
  'redux-logger',
  'redux-thunk',
  'connected-react-router',
];

const immutableVendors = [
  'immutable',
];

const materializeVendors = [
  'materialize-css',
];

// Base config
const config = {
  // Get mode from NODE_ENV
  mode: process.env.NODE_ENV,

  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // The point or points to enter the application.
  entry: {
    react: reactVendors,
    immutable: immutableVendors,
    materialize: materializeVendors,
  },

  // Affecting the output of the compilation
  output: {
    // path: the output directory as an absolute path (required)
    path: path.resolve(__dirname, 'frontend/dist/dll/'),
    // filename: specifies the name of output file on disk (required)
    filename: '[name]_dll.js',
    // library: name of the generated dll reference
    library: '[name]_dll',
  },

  // A list of used webpack plugins
  plugins: [
    // Better building progress display
    new ProgressBarWebpackPlugin(),
    // Output manifest json file for each generated dll reference file
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'frontend/dist/dll/[name]_manifest.json'),
      name: '[name]_dll',
    }),
  ],

  // Turn off performance hints (assets size limit)
  performance: {
    hints: false,
  },
};

export default config;
