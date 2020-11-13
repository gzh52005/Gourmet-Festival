//二次封装axios
import axios from 'axios';

// const baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'http://47.115.82.38:8085'

const baseURL = process.env.NODE_ENV == 'development' ? 'http://120.25.208.234:3003' : 'http://47.115.82.38:8085'
//创建一个新的axios
// const request = axios.create({
//     baseURL: baseURL + '/api', //基础路径,
//     timeout: 3000, //请求超时时间：3s；如果3s后都没有响应，我就断开请求
//     //工作之后：一般发请求需要带token过去:token如果不设置是没有响应的
//     // headers:{'Authorization' : 'sdadasfugsajgajaf6576a5af5af6asf'}
//     withCredentials: true
//     //跨域（验证码）
// });

const request = axios.create({

    baseURL:"/api", //基础路径,

   

    timeout: 3000, //请求超时时间：3s；如果3s后都没有响应，我就断开请求
    //工作之后：一般发请求需要带token过去:token如果不设置是没有响应的
    // headers:{'Authorization' : 'sdadasfugsajgajaf6576a5af5af6asf'}
    withCredentials: true
    //跨域（验证码）
});

export function get(url,data,config={}){
    return  request({
          url,
          method:"get",
          params:data,
          ...config
      })
  }

//get请求
// axios.get('/user');// /user  http://47.115.82.38:8085/user

export default {
    get
}; //将封装好的request导出