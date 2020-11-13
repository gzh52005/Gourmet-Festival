/* 登录 */

import React from 'react'
import { List, InputItem, WhiteSpace ,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import '../../style/login.scss'
function Login(props){
  // console.log(props,1111)
  //  const { getFieldProps } = this.props.form;
    return (
      <div>
        <div className="goBack">
          <Button>返回</Button>
          <h1>登录美食杰</h1>
          <Button>注册</Button>
        </div>

          <List>
          <InputItem
            // {...getFieldProps('username')}
            type="text"
            placeholder="手机号/邮箱/用户名"
            error
          ></InputItem>
          <InputItem
            // {...getFieldProps('password')}
            type="password"
            placeholder="密码"
            error
          ></InputItem>
         <Button type="warning" className="lgbtn" onClick={()=>{this.Login()}}>登录</Button>
        </List>


      </div>
    )


}

Login = createForm()(Login);
export default Login;