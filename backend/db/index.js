import { Pool } from 'pg';

import config from '../config.json';

const isProduction = process.env.NODE_ENV === 'production';

// Create a config to configure both pooling behavior and client options
// all config is optional and the environment variables will be read if the config is not present
const pool = new Pool({
  host: isProduction ? config.pgsql_hostname_prod : config.pgsql_hostname_dev, // Can override by env var: PGHOST
  database: config.pgsql_database, // Can override by env var: PGDATABASE
  user: config.pgsql_username, // Can override by env var: PGUSER
  password: config.pgsql_password, // Can override by env var: PGPASSWORD
  port: config.pgsql_port, // Can override by env var: PGPORT
});

// Initializes a connection pool
export default {
  query: (text, params) => pool.query(text, params),
  pool,
};
