
import knexjs from 'knex';

const localDb = knexjs({
  client: 'pg',
  connection: {
    host: "isabelle.db.elephantsql.com",
    user: "irehdqyu",
    password: "6DGK9C6-OCMcm11Ku2w0-MY_iBNbCufX",
    port: 5432,
    database: "irehdqyu",
    pool: {
      max: 5,
    },
  },
  useNullAsDefault: true,
});

export { localDb };
