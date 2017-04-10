import pg from 'pg';

import config from '../config.json';

const pgConnect = `postgres://${config.pgsql_username}:${config.pgsql_password}@${config.pgsql_hostname}/${config.pgsql_database}`;

export const apiGet = (req, res) => {
  res.json({
    data: 'api get data',
  });
};

export const apiPost = (req, res) => {
  pg.connect(pgConnect, (err, client, done) => {
    if (err) {
      console.error('PostgreSQL ERROR : %s', err.message);
      if (client) done(client);
    } else {
      client.query('SELECT * FROM app_name_modelname', (err2, result) => {
        if (err) {
          console.error('PostgreSQL ERROR : %s', err2.message);
          if (client) done(client);
        } else {
          done();
          const data = result.rowCount ? result.rows[0].field_name : 'data not found, check your database';
          res.json({
            data,
          });
        }
      });
    }
  });
};
