import path from 'path';
import webpack from 'webpack';

const reactVendors = [
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux',
];

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Start entry point(s)
  entry: {
    react: reactVendors,
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
    // Minimize javascript files with source map generated
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
    }),
    // Define production env which shaved off 75% of the build output size
    // http://moduscreate.com/optimizing-react-es6-webpack-production-build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Output manifest json file for each generated dll reference file
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'frontend/dist/dll/[name]_manifest.json'),
      name: '[name]_dll',
    }),
  ],
};
