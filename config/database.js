module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-87-134-4.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dcemrkhhch6k4b'),
      user: env('DATABASE_USERNAME', 'mrwazmkhairusq'),
      password: env('DATABASE_PASSWORD', 'cbaf73537874c531ef87f898480b1e6b3099c8c7882dc043c659efd61ffc3e8c'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
