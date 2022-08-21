require('dotenv').config();
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
