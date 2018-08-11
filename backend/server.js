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

import config from './config.json';
import router from './routes/index';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || config.http_port;
const RedisStore = connectRedis(session);
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
app.use('/api/v1', router);

if (isProduction) {
  // Serve dist files if is production mode
  const distPath = path.resolve(__dirname, '../frontend/dist/prod');
  app.use(express.static(distPath));
  app.get('*', (_, res) => {
    res.sendFile(`${distPath}/index.html`);
  });
} else {
  // Return 404 for non-exist api
  app.get('*', (req, res) => {
    res.status(404).send(`Api not exist for ${req.url}`);
  });
}

// Start server listen on specific port
server.listen(port, (error) => {
  if (error) {
    console.error(`\n${error}`);
    server.close();
    process.exit(1);
  }
  if (isProduction) {
    console.info(`\nExpress: Listening on port ${port}, open up http://localhost:${port}/ in your broswer!\n`.green);
  } else {
    console.info(`\nExpress: Serve api on http://localhost:${port}/ \n`);
  }
});

const stopHandler = (signal) => {
  console.error(`\nExit process in responding to %s`.red, signal);
  server.close();
  process.exit(1);
};

process.on('SIGTERM', stopHandler, 'SIGTERM');
process.on('SIGINT', stopHandler, 'SIGINT');
process.on('SIGHUP', stopHandler, 'SIGINT');
