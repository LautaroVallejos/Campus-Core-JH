module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '234d002b5f2913e51c5152ea4ea4c8cb'),
  },
});
