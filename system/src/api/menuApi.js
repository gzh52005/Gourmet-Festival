//存放所有关于用户的接口
import request from "../untils/request";


export function get(url,data={},config={}){
    return  request({
          url,
          method:"get",
          params:data,
          ...config
      })
  }



  export default {
      get
  }