module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'campus-database-jh-test.cjieupmz3alc.us-east-2.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'JHCAMPUS'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'notSecureChangeMe2511'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
