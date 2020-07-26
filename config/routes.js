const articles = require('../src/controllers/articles');
const users = require('../src/controllers/users');
const jwt = require('../src/utils/jwt');

module.exports = function(app) {
    console.log('enter router handler')
    // 新增文章
    app.post('/api/article', jwt.authenticateToken , articles.create);
    // 登录
    app.get('/api/login', users.login);
}