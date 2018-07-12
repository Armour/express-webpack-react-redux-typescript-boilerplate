import express from 'express';
import path from 'path';
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
const server = require('http').createServer(app);

if (isProduction) {
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(logger('combined'));
  app.set('trust proxy', 1);
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
  secret: 'keyboard cat',
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: !isProduction,
    secure: isProduction,
  },
}));

// api router
app.use('/api', indexRtr);

const stopListenOnPort = () => {
  server.close(() => {
    console.error(`\nClosed out remaining connections.`.red); // eslint-disable-line no-console
  });
};
const startListenOnPort = () => {
  // Start server listen on specific port
  server.listen(port, (error) => {
    if (error) {
      console.error(`\n${error}`); // eslint-disable-line no-console
      stopListenOnPort();
      process.exit(1);
    }
    console.log(`\nExpress: Listening on port ${port}, open up http://localhost:${port}/ in your broswer!\n`.green); // eslint-disable-line no-console
  });
};

if (!isProduction) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: webpackConfig.stats,
  });
  // Serve static files through webpackDevMiddleware
  const distPath = path.resolve(__dirname, '../frontend/dist/dev');
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (_, res) => {
    res.write(middleware.fileSystem.readFileSync(`${distPath}/index.html`));
    res.end();
  });
  // Start listening on port when webpack has finished compiling
  compiler.plugin('done', () => startListenOnPort());
} else {
  // Serve static files as usual
  const distPath = path.resolve(__dirname, '../frontend/dist/prod');
  app.use(express.static(distPath));
  app.get('*', (_, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
  startListenOnPort();
}

const stopHandler = (signal) => {
  console.error(`\nExit process in responding to %s`.red, signal); // eslint-disable-line no-console
  stopListenOnPort();
  process.exit(1);
};

process.on('SIGTERM', stopHandler, 'SIGTERM');
process.on('SIGINT', stopHandler, 'SIGINT');
process.on('SIGHUP', stopHandler, 'SIGINT');
