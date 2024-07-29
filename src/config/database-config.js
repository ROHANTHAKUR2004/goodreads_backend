const mongoose = require('mongoose');

const { DB_URL } = require('./server-config');

const connect = async () => {
    await mongoose.connect('mongodb+srv://kenilyt107:kenilyt107@demo.cdoulbw.mongodb.net/goodreadsDemo'
        );
}

module.exports = {
    connect
}