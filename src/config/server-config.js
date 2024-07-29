const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: 3005,
    DB_URL: 'mongodb+srv://kenilyt107:kenilyt107@demo.cdoulbw.mongodb.net/goodreadsDemo',
    JWT_SECRET: 'goodreads_secret_jwt',
    JWT_EXPIRY: '24h'
}