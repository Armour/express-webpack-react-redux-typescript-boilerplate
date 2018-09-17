import merge from 'webpack-merge';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import ProdWebpackConfig from './webpack.config.prod.babel';

export default merge(ProdWebpackConfig, {
  plugins: [
    // Webpack bundle analyzer for profiling
    new BundleAnalyzerPlugin({
      analyzerPort: process.env.PORT_BUNDLE_ANALYZER || 3005,
      generateStatsFile: true,
    }),
  ],
});
