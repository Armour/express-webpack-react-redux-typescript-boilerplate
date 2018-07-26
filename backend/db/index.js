import { Pool } from 'pg';

import config from '../config.json';

const isProduction = process.env.NODE_ENV === 'production';

let pool;

// Create a postgresql connection pool
if (process.env.DATABASE_URL !== undefined) {
  // For Heroku Postgres deployment
  // See https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
} else {
  // All config is optional, the environment variables will be used if the config is not present
  pool = new Pool({
    host: isProduction
      ? config.pgsql_hostname_prod
      : config.pgsql_hostname_dev, // Default: process.env.PGHOST
    database: config.pgsql_database, // Default: process.env.PGDATABASE
    user: config.pgsql_username, // Default: process.env.PGUSER
    password: config.pgsql_password, // Default: process.env.PGPASSWORD
    port: config.pgsql_port, // Default: process.env.PGPORT
  });
}

// Initializes a connection pool
export default {
  query: (text, params) => pool.query(text, params),
  pool,
};
