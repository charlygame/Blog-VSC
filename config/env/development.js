'use strict';

const port = process.env.PORT || 3000;

module.exports = {
    db: process.env.MONGODB_URL || 'mongodb://localhost/noobjs_dev',
    hostAPI: 'http://localhost:3000/api/',
    
}