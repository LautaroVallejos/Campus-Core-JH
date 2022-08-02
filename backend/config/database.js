module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'campus-database-jh-test.cjieupmz3alc.us-east-2.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 33066),
      database: env('DATABASE_NAME', 'campus-database-jh-test'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
