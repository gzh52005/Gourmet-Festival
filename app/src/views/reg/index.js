
import React from 'react'
import { List, InputItem, WhiteSpace ,Button, Icon, Grid,NavBar,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../../style/login.scss'
import User from '../../api/user.js';


class Reg extends React.Component {
 
    async log(username,password,confirmPassword){
       
      console.log(username,111);
      console.log(password,222);
      console.log(confirmPassword,333);
     
     if(username&& password){

        // 验证是否重名
     let res = await User.testName(username)
     if(res.data.code===3000){
       Toast.fail('用户名已存在！');
       
     }else if(res.data.code===2000){
       // 验证两次密码是否一致
       if(password===confirmPassword){
         
         // 发送请求
          const data = await User.userReg(username,password)
          console.log(data,99999)
        
          if(data.data.code==2000){
          Toast.success('注册成功');
      
          this.props.history.push('/login')
        }else{
          Toast.fail('注册失败');
        }
       }else{
         Toast.fail('两次密码不一致，请重新输入密码！');
       }
 
          
     }
      

     }else{
     
      Toast.fail('用户名，密码不能为空！！！');

    }
    
   
       
      }

 // 页面跳转
 goto=(path)=> {
    return ( console.log(555555555555),
    this.props.history.push(path))
 }

  render(props) {
    const { getFieldProps } = this.props.form;

    let username = this.props.form.getFieldProps('username').value;
    let password = this.props.form.getFieldProps('password').value;
    let confirmPassword = this.props.form.getFieldProps('confirmPassword').value;
    



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
            clear

          ></InputItem>

          <InputItem
             {...getFieldProps('password')}
            type="password"
            placeholder="密码"
            clear
          ></InputItem>

           <InputItem
             {...getFieldProps('confirmPassword')}
            type="password"
            placeholder="确认密码"
            clear
          ></InputItem>
         <Button type="warning" onClick={()=>{this.log(username,password,confirmPassword)}}>注册</Button>
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



