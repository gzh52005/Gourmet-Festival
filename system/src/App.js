import React, { lazy, Suspense } from "react";


import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";

import "./App.css";

// 引入组件
const Login = lazy(() => import("./views/login/index"));
const Apps = lazy(() => import("./views/App/index"));

import {HashRouter,BrowserRouter as Router,Route,Redirect,Switch,Link,NavLink, withRouter} from 'react-router-dom';

import { Menu,Row, Col ,Button} from 'antd';

import { Layout, Menu, Breadcrumb, Button, Row, Col } from "antd";
import { Route, Redirect, withRouter } from "react-router-dom";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import './App.css';
import Daughter from "./views/route/index";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


//路由懒加载的实现：异步载入资源
//import AuthRoute from "./permission"; //路由守卫

// const Home = lazy(() => import("./views/index/index"));
// const Login = lazy(() => import("./views/menu"));
// const LoginPage = lazy(() => import("./views/login"));
// const Userspage = lazy(() => import("./views/users"));

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: [
        {
          path: "/home",
          text: "首页",
        },

        {
          path: "/menu",
          text: "菜单管理",
        },
        {
          path: "/user",
          text: "用户管理",
        },
      ],
      currentPath: "/home",
    };
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <Route path="/login" component={Login}></Route>
          <Route path="/app" component={Apps}></Route>
          <Redirect from="/" to="/login" exact />
        </Suspense>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
