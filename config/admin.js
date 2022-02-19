module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '528f4cf59cb975731b27b61ed21be751'),
  },
});
