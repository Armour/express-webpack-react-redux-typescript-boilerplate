import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import session from 'express-session';
import connectRedis from 'connect-redis';
import 'colors';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.babel';

import config from './config.json';
import indexRtr from './routes/index';

const RedisStore = connectRedis(session);
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || config.http_port;
const app = express();

const startListenOnPort = () => {
  // Start server listen on specific port
  app.listen(port, (error) => {
    if (error) {
      console.log(`\n${error}`); // eslint-disable-line no-console
    }
    console.log(`\nExpress: Listening on port ${port}, open up http://localhost:${port}/ in your broswer!\n`.green); // eslint-disable-line no-console
  });
};

if (isProduction) {
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

app.use(compression());
app.use(bodyParser.json({
  limit: '20mb',
}));
app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: true,
}));
app.use(cookieParser());
app.use(session({
  store: new RedisStore({
    host: isProduction ? config.redis_hostname_prod : config.redis_hostname_dev,
    port: config.redis_port,
  }),
  name: 'fRy_t0-haCk)me<br0B',
  secret: 'mIceqvv8EgECGOVKIPlR83UGGxMOARaYJKxQK6kWwwx3pv06G0n9ZPLMNqIOwX9rS69YCXDHDmV4O2JAWHEWGYI8pZ2M60VocBc92ILjOM1Gp3S42EHNmQ65c4W7ryj9',
  saveUninitialized: false,
  // If only use http:
  // resave: true,
  // cookie: {
  //   httpOnly: false,
  //   secure: false,
  // },
}));

// index router
app.use('/fetch', indexRtr);

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
  app.get('*', (_, res) => {
    res.write(middleware.fileSystem.readFileSync(`${distPath}/index.html`));
    res.end();
  });
  // Start listening on port when webpack has finished compiling
  compiler.plugin('done', () => {
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
  app.get('*', (_, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
  startListenOnPort();
}
