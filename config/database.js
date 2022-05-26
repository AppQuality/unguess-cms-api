

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DB_HOST", "127.0.0.1"),
      port: env.int("DB_PORT", "5432"),
      database: env("DB_NAME", "strapi-db"),
      user: env("DB_USER", ""),
      password: env("DB_USER_PSW", ""),
    },
    useNullAsDefault: true,
  },
});