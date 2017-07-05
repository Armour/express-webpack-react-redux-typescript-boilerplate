import pgp from 'pg-promise';

import config from '../config.json';

// Create a config to configure both pooling behavior and client options
// note: all config is optional and the environment variables will be read if the config is not present
const dbConfig = {
  host: config.pgsql_hostname,
  database: config.pgsql_database, // env var: PGDATABASE
  user: config.pgsql_username, // env var: PGUSER
  password: config.pgsql_password, // env var: PGPASSWORD
};

// Initializes a connection pool
export const db = pgp()(dbConfig);
