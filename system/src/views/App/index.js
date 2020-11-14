import React, { lazy, Suspense } from "react";

import { Layout, Menu, Breadcrumb, Button, Row, Col, Dropdown,message } from "antd";
import { Route, Redirect, withRouter } from "react-router-dom";
import { withUser, withStorage, withAuth } from "../../untils/hoc";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";

// import "./index.css";
import Daughter from "../route/index";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//路由懒加载的实现：异步载入资源
//import AuthRoute from "./permission"; //路由守卫

// const Home = lazy(() => import("./views/index/index"));
// const Login = lazy(() => import("./views/menu"));
// const LoginPage = lazy(() => import("./views/login"));
// const Userspage = lazy(() => import("./views/users"));

@withAuth
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: [
        {
          path: "/app/home",
          text: "首页",
        },

        {
          path: "/app/menu",
          text: "菜单管理",
        },
        {
          path: "/app/user",
          text: "用户管理",
        },
      ],
      currentPath: "/home",
      name: "",
    };
  }

  goto = (path) => {
    // console.log(path, "88888888888");
    this.props.history.push(path);
  };
  componentDidMount() {
    // console.log("aaaaaaaaaaaaa");
    this.setState({
      name: this.props.currentUser.data[0].name,
    });
  }
  popup =({ key }) => {
    console.log(key,"蔡徐坤")
    //点击退出时清空localStore
    if(key == "退出登录"){
      localStorage.removeItem("currentUser");
      sessionStorage.removeItem("currentUser");
      console.log(this.state.name,"888888888888")
      // this.setState({
      //   name:"",
      // })
      this.props.history.push("/login");
    }
  };
  render() {
    const { menu } = this.state;
    const menuUser = (
      <Menu onClick={this.popup}>
        <Menu.Item key="修改密码">
          <a target="_blank"  rel="noopener noreferrer">
            修改密码
          </a>
        </Menu.Item>
        <Menu.Item key="退出登录">
          <a target="_blank" rel="noopener noreferrer">
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Layout>
          <Header
            className="header"
            style={{
              position: "fixed",
              zIndex: 1,
              height: "69px",
              width: "100%",
            }}
          >
            {/* <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">美食杰后台管理系统</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
            <Row
              style={{
                backgroundColor: "#001529",
              }}
            >
              <Col span={12}>
                <Menu mode="horizontal" theme="dark">
                  <Menu.Item className="font" icon={<UserOutlined />}>
                    美食杰后台管理系统
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Dropdown overlay={menuUser}>
                  <a
                    className="ant-dropdown-link"
                    // onClick={(e) => e.preventDefault()}
                  >
                    欢迎{" "}
                    <span style={{ fontSize: "25px" }}>{this.state.name} </span>{" "}
                    大笨蛋
                    <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </Header>
        </Layout>
        <Layout style={{ minHeight: "1280px" }}>
          <Sider
            width={200}
            className="site-layout-background"
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 70,
            }}
          >
            <Menu className="nav" mode="inline" defaultSelectedKeys={["2"]}>
              {menu.map((item) => {
                return (
                  <Menu.Item
                    key={item.text}
                    icon={<UserOutlined />}
                    onClick={this.goto.bind(this, item.path)}
                  >
                    {item.text}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Daughter />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
