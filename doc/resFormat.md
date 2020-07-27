#### 数据返回格式文档
1. 常见状态码
- 200： 请求处理成功(success)
- 500： 请求处理失败(server error)
- 401： 请求未认证，调整登录页 (authenticate fail)
- 406： 请求未授权，跳转未授权提示页 (authorize fail)

2. 基本响应格式
```
{
    code: 200,
    data: {
        message: "success"
    }
}
```
3. 响应实体格式
```
{
    code: 200,
    data: {
        message: "success",
        entity: {
            id: 1,
            name: 'xxx'
        }
    }
}
```
4. 响应列表格式
```
{
    code: 200,
    data: {
        message: "success",
        list: [
            {
                id: 1,
                name: 'xxx'
            },
            {
                id: 2,
                name: 'xxx'
            }
        ]
    }
}
```
5. 响应分页格式
```
{
    code: 200,
    data: {
        message: "success",
        recordCount: 2,
        totalCount: 2,
        pageNo: 1,
        totalPage: 1,
        list: [
            {
                id: 1,
                name: "xxx"
            },
            {
                id: 2,
                name: 'xxx'
            }
        ]
    }

}
```
> data.recordCount: 当前页记录条数  data.totalCount: 当前页总共记录条数
> data.pageNo 当前页码  data.totalPage 总共页码