//存放所有关于用户的接口
import request from "../untils/request";

export default {
//查询用户列表数据
getlist(page, pageSize, query) {
    // console.log(query, 66666)
    return request.get('/user/getlist', {
        params: {
            page,
            pageSize,
            query
        }
    })
},

//功能：删除某个用户
delUser(id) {
    return request.delete('/user/remove/' + id)
},


//功能：添加新用户
addUser(form) {
    console.log(form, 999);
    return request({
        method: 'post',
        url: 'user/adduser',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: form
    })
},

//功能：查询某个用户信息
getuser(id) {
    return request.get('/user/getuser/' + id)
},

//功能：编辑某个用户信息
editUser(form, id) {
    return request({
        method: 'put',
        url: ('/user/reset/' + id),
        headers: { 'Content-Type': 'multipart/form-data' },
        data: form
    })
},

//功能：删除用户图片
delUserimg(id) {
    return request({
        method: 'put',
        url: ('/user/delpic/' + id),
        headers: { 'Content-Type': 'multipart/form-data' },

    })
},

//功能：验证码生成
// function getVcode(width, height, fontSize) {
//     return { data } = request.get('/captcha', {
//         params: {
//             width,
//             height,
//             fontSize
//         }
//     })
// }

//功能：登录功能
userlogin(name, password, vcode) {
    return request.get('/user/login', {
        params: {
            name,
            password,
            vcode
        }
    })
},

//功能：修改密码
changepsw(id, password) {
    return request.put('/user/reset', { id: id, password: password })
},

//功能：验证token有效性
checkToken(token) {
    return request.get('/user/verify', {
        params: {
            token,
        }
    })
},
}


// module.exports = {
//     getlist,
//     delUser,
//     addUser,
//     getuser,
//     editUser,
//     delUserimg,
//     userlogin,
//     changepsw,
//     checkToken,
// }