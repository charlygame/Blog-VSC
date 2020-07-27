/**
 * 状态码与信息映射
 */
const codeMsgMap = {
    '200': ['success', '请求处理成功'],
    '500': ['server error', '请求处理失败'],
    '401': ['authenticate fail', '请求未认证'],
    '406': ['authorize fail', '请求未授权']
}
/**
 * 返回格式化json
 * @param {*} code 
 * @param {*} data 
 */
function resFormat(code, data) {
    let result = {
        code: code,
        data: {
            message: codeMsgMap[code][0]
        }
    }
    result.data = Object.assign(result.data, data);
    return result;
}

module.exports = resFormat;