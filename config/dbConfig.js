const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  HOST: process.env.DATABASE_HOST,
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE: process.env.DATABASE_NAME,
  DIALECT: process.env.DATABASE_DIALECT
}

// module.exports = {
//   HOST: 'bze7upeat22hyfbt865b-mysql.services.clever-cloud.com',
//   USER: 'uqrnbms7ukgvzvwe',
//   PASSWORD: 'c1JqGh31ZFcQadlymYu1',
//   DATABASE: 'bze7upeat22hyfbt865b',
//   DIALECT: 'mysql'
// }