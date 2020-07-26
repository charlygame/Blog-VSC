require('dotenv').config();
const express = require('express');
const next = require('next');
const config = require('./config');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const mongoose = require('mongoose');
require('./src/models');
const routeHandler = require('./config/routes');
const useMiddlewares = require('./config/middlewares');
const startup = require('./src/utils/startup');


app.prepare().then(() => {

    customServer(useMiddlewares,routeHandler);
    connectDB();
}); 
/**
 * 开启自定义服务器
 */
function customServer(useMiddlewares, routeHandle) {

    const server = express();
    useMiddlewares(server);
    routeHandle(server);
    server.all('*', (req, res) => {
        return handle(req, res);
    })
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
    return server;
}

/**
 * 连接数据库
 */
function connectDB() {
    mongoose.connection
    .on('error', console.log)
    .on('disconnected', connectDB)
    console.log(config);
    return mongoose.connect(config.db, { keepAlive: 1, useNewUrlParser: true }, (err) => {
        if (!err) {
            // 添加管理员
            startup.addAdmin();
        }
    });
}
