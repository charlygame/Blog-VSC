const jwt = require("../utils/jwt");
const mongoose = require('mongoose');
const User = mongoose.model('User');
const resFormat = require('../utils/resFormat');
/**
 * 只处理登录请求
 * @param {*} req 
 * @param {*} res 
 */
exports.login = function(req, res) {
    // 获取用户名和密码
    console.log(req.query);
    console.log('执行登录接口');
    if (!req.query.username) {
        res.send('用户名不能为空');
        return;
    }

    if (!req.query.password) {
        res.send('密码不能为空');
        return;
    }
    // 检测用户是否存在
    // 判断密码是否正确
    User.load({ criteria: { username: req.query.username}, select: 'username password' }, (err, userInfo) => {
        if (!userInfo) {
            res.send('用户名不存在');
        }
        if (userInfo.username === req.query.username  && 
            userInfo.password === req.query.password) {
                
                // 发放token
                res.json(resFormat(200, {
                    token: jwt.generateAccessToken(userInfo.username)
                }));
            }
    });
}

/**
 * 创建用户
 * @param {*} req 
 * @param {*} res 
 */
exports.create = function(req, res) {

}