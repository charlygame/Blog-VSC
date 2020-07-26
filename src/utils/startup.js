const mongoose = require('mongoose');
const User = mongoose.model('User');


/**
 * 临时不考虑注册用户和权限
 * 添加管理员到数据库
 */
function addAdmin() {
    let userName = process.env.ADMIN_NAME;
    let password = process.env.ADMIN_PASSWORD;

    User.load({ criteria: { username: userName}, select: 'username password' }, (err, user) => {
        if (!user) {
            let user = new User();
            user.username = userName;
            user.password = password;
            user.save();
        }
    });
}

module.exports = {
    addAdmin
}