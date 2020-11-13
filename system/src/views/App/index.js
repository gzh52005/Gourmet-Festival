import React, { lazy, Suspense } from "react";

import { Layout, Menu, Breadcrumb, Button, Row, Col } from "antd";
import { Route, Redirect, withRouter } from "react-router-dom";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
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
    };
  }

  goto = (path) => {
    console.log(path, "88888888888");
    this.props.history.push(path);
  };

  render() {
    const { menu } = this.state;

    return (
      <div>
        <Layout>
          <Header
            className="header"
            style={{ position: "fixed", zIndex: 1, width: "100%" }}
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
                <Button type="link" onClick={() => {}}>
                  退出
                </Button>

                <React.Fragment>
                  <Button type="link" onClick={this.goto.bind(this, "/reg")}>
                    注册
                  </Button>
                  <Button type="link" onClick={this.goto.bind(this, "/login")}>
                    登录
                  </Button>
                </React.Fragment>
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
              top: 64,
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
