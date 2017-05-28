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
const port = process.env.PORT || config.http_port;
const app = express();

const startListenOnPort = () => {
  // Start server listen on specific port
  app.listen(port, 'localhost', (error) => {
    if (error) {
      console.log(`\n${error}`);
    }
    console.log(`\nExpress: Listening on port ${port}, open up http://localhost:${port}/ in your broswer!\n`);
  });
};

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Api router
app.use('/api', api);

if (!isProduction) {
  let listend = false;
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    // The public URL of the output resource directory, should be the same as output.publicPath
    publicPath: webpackConfig.output.publicPath,
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
  middleware.waitUntilValid(() => {
    if (!listend) {
      startListenOnPort();
      listend = true;
    }
  });
} else {
  // Server static files as usual
  const distPath = path.resolve(__dirname, '../frontend/dist/prod');
  app.use(express.static(distPath));
  app.use(favicon(`${distPath}/favicon.ico`));
  app.get('*', (req, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
  startListenOnPort();
}
