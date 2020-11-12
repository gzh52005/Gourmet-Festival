// let request = require('../utils/request')
import request from '../utils/request';


export default{
    // 登录
 userLogin(name,password) {
    return request.get('/user/login',{
        params:{
            name,
            password
        }
    })

},


// 注册
userReg(name,password){
    return request.post('/user/reg',{
        name,
        password
    })
},

// 验证注册是否重名
testName(name){
    return request.get('/user/checkname',{
        params:{
            name
        }
    })
}

}