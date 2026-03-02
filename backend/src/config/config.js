require("dotenv").config();

const config = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT,
};

module.exports = config;
