const bodyParser = require('body-parser');
// 处理中间件使用
module.exports = function (app) {
    console.log('start middlewares');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
}