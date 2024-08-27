
import knexjs from 'knex';

const localDb = knexjs({
  client: 'pg',
  connection: {
    host: "silly.db.elephantsql.com",
    user: "wuanukkx",
    password: "Or6BzbBKveLEI80DjaiR83yz6dQRh7Az",
    port: 5432,
    database: "wuanukkx",
    pool: {
      max: 5,
    },
  },
  useNullAsDefault: true,
});

export { localDb };
