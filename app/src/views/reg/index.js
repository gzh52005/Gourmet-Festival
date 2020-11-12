
import React from 'react'
import { List, InputItem, WhiteSpace ,Button, Icon, Grid,NavBar,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../../style/login.scss'
import User from '../../api/user.js';


class Reg extends React.Component {

    async log(e){
        let username = this.props.form.getFieldProps('username').value;
        let password = this.props.form.getFieldProps('password').value;
        //let password = this.props.form.getFieldProps('confirmPassword').value;
        
      // 发送请求
        const data = await User.userReg(username,password)
          console.log(data,99999)
        
          if(data.data.code==2000){
          Toast.success('注册成功');
        //   this.props.history.push('/recommend')
        }else{
          Toast.fail('注册失败');
        }
       
      }

 // 页面跳转
 goto=(path)=> {
    return ( console.log(555555555555),
    this.props.history.push(path))
 }

  render(props) {
    const { getFieldProps } = this.props.form;
    return (
      <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" color='#f00' size="lg"/>}
            leftContent="返回"
            onLeftClick={this.goto.bind(this,"/recommend")}
            rightContent={[<div onClick={this.goto.bind(this,"/login")}>登录</div>]}>注册美食杰
          </NavBar>

          <List>
          <InputItem
              {...getFieldProps('username')}
            type="text"
            placeholder="用户名"

          ></InputItem>
          <InputItem
             {...getFieldProps('password')}
            type="password"
            placeholder="密码"
   
          ></InputItem>
           <InputItem
            //  {...getFieldProps('confirmPassword')}
            type="password"
            placeholder="确认密码"
   
          ></InputItem>
         <Button type="warning" onClick={()=>{this.log()}}>注册</Button>
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

Reg = createForm()(Reg);
export default Reg;