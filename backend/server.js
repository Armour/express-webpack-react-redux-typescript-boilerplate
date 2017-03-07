import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.babel';

import config from './config.json';

import api from './routes/api';

const isProduction = process.env.NODE_ENV === 'production';
const port = config.http_port;
const app = express();

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Api router
app.use('/api', api);

if (!isProduction) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    // The public URL of the output resource directory (CDN), should be the same as output.publicPath
    publicPath: webpackConfig.output.publicPath,
    // Where the webpack dev server serve the static files, should be the same as output.path
    contentBase: path.resolve(__dirname, 'frontend/dist/'),
    // Allow CORS
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#no-access-control-allow-origin-header-is-present-on-the-requested-resource
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // Colorful stats output
    stats: {
      colors: true,
    },
  });
  // Server static files through webpackDevMiddleware
  const distPath = path.resolve(__dirname, '../frontend/dist/dev');
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(`${distPath}/index.html`));
    res.end();
  });
} else {
  // Server static files as usual
  const distPath = path.resolve(__dirname, '../frontend/dist/prod');
  app.use(express.static(distPath));
  app.use(favicon(`${distPath}/favicon.ico`));
  app.get('*', (req, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
}

// Start server listen on specific port
app.listen(port, '0.0.0.0', (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Node.js: Listening on port ${port}, open up http://0.0.0.0:${port}/ in your broswer!`);
});
