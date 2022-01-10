module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '55766abc6e9052daa0f48aca45375612'),
  },
});
