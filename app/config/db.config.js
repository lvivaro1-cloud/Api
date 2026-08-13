module.exports = {
  HOST: "ep-shiny-band-atu1bdht-pooler.c-9.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_CNkOeS4XF1WU",
  DB: "neondb",
  dialect: "postgres",
  dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};