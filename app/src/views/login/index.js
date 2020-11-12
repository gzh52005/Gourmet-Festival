/* 登录 */

import React from 'react'
import { List, InputItem, WhiteSpace ,Button, Icon, Grid,NavBar,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../../style/login.scss'
import User from '../../api/user.js';


class Login extends React.Component {


async log(e){
    let username = this.props.form.getFieldProps('username').value;
    let password = this.props.form.getFieldProps('password').value;
  // 发送请求
    const data = await User.userLogin(username,password)
      console.log(data,99999)
    
      if(data.data.code==2000){
      Toast.success('登录成功');
      this.props.history.push('/recommend')
    }else{
      Toast.fail('登录失败');
    }
   
  }
  

  // 页面跳转
   goto=(path)=> {
     return ( console.log(555555555555),
     this.props.history.push(path))
  }

render(props){
  // console.log(this.props,1111)
   const { getFieldProps } = this.props.form;
  //  console.log(getFieldProps('username').value,1111)
   


  

    return (
      
      <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" color='#f00' size="lg"/>}
            leftContent="返回"
            onLeftClick={this.goto.bind(this,"/recommend")}
            rightContent={[<div onClick={this.goto.bind(this,"/reg")}>注册</div>]}>登录美食杰
          </NavBar>

          <List>
          <InputItem
              {...getFieldProps('username')}
            type="text"
            placeholder="手机号/邮箱/用户名"

          ></InputItem>
          <InputItem
             {...getFieldProps('password')}
            type="password"
            placeholder="密码"
   
          ></InputItem>
         <Button type="warning" onClick={()=>{this.log()}}>登录</Button>
        </List>


        <div className="logReg">
           <a>
            <span>
               <img src="/img/QQ.png"/>
              QQ登录
            </span>
          </a>
          <a>
            <span>
                 <img src="/img/wx.png"/>
                微信登录
            </span>
          </a>
       </div>


      </div>
    )


}

}

Login = createForm()(Login);
export default Login;