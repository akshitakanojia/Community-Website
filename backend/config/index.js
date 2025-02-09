require('dotenv').config();

const config = {
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  BASE_URL: process.env.BASE_URL,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_HOST: process.env.EMAIL_HOST,
};

module.exports = config;
