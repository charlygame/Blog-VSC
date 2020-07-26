const jwt = require('jsonwebtoken');

/**
 * 验证token 请求中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader &&  authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    console.log(token);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err) return res.status(403).json(err);
        res.user = user
        next();
    });
}
/**
 * 生成token
 * @param {*} username 
 */
function generateAccessToken(username) {
    return jwt.sign({username}, process.env.TOKEN_SECRET, {expiresIn: '1day'});
}

module.exports = {
    authenticateToken,
    generateAccessToken
}