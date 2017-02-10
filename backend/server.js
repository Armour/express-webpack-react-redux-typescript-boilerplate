import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev.babel';

import api from './routes/api';

const isDev = process.env.NODE_ENV !== 'production';
const port = 3003;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

if (isDev) {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    // The public URL of the output resource directory (CDN), should be the same as output.publicPath
    publicPath: config.output.publicPath,
    // Where the webpack dev server serve the static files, should be the same as output.path
    contentBase: path.resolve(__dirname, 'frontend/dist/dev'),
    // Allow CORS
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#no-access-control-allow-origin-header-is-present-on-the-requested-resource
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // Set output stats
    stats: {
      colors: true,
    },
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  const distPath = path.join(__dirname, 'dist', 'dev');
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(`${distPath}/index.html`));
    res.end();
  });
} else {
  const distPath = path.join(__dirname, 'dist', 'prod');
  app.use(express.static(distPath));
  app.use(favicon(`${distPath}/favicon.ico`));
  app.get('*', (req, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
}

app.listen(port, '0.0.0.0', (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Node.js: Listening on port ${port}, open up http://0.0.0.0:${port}/ in your broswer!`);
});
