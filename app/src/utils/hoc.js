/* 
  封装一个高阶组件
  实现收藏页面验证 是否有localStorage ，没有就需要登录才能访问该页面  
*/

import React from "react";
import { Redirect } from "react-router-dom";
import User from "../api/user";
import { message } from "antd";
// import store from "../store/index";

export function withUser(InnerComponent) {
  return function OuterComponent(props) {
    //  console.log("OuterComponent.props=", props);
    let data =
      localStorage.getItem("currentUser") ||
      sessionStorage.getItem("currentUser");
    let currentUser;
    try {
      currentUser = JSON.parse(data);
    } catch (err) {
      currentUser = data;
    }
    return <InnerComponent {...props} currentUser={currentUser} />;
  };
}
// 二：反向继承
// 可以实现路由拦截

export function withAuth(InnerComponent) {
  @withUser
  class OuterComponent extends React.Component {
    async componentDidMount() {
      const { currentUser } = this.props;
    //   console.log(currentUser, "****************");
      //校验token
      if (currentUser) {
        const { data } = await User.userToken(
          {
            token: currentUser.token,
          }
        );
        console.log(data,"555555555555")
        //  console.log(data.code,"5555555555")
        if (data.code !== 3000) {
          message.error("登录已失效，请重新登录！！！");
          this.props.history.replace({
            pathname: "/login",
            search: "?redirectTo=" + this.props.location.pathname,
          });
        }
      }
    }
    render() {
      const { currentUser } = this.props;
      if (currentUser) {
        return <InnerComponent {...this.props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }

  return OuterComponent;
}
