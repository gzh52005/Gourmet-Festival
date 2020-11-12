import "./App.css";
import React, { Suspense, lazy } from "react";

import { Flex } from "antd-mobile";
import {
  HomeOutlined,
  PlayCircleOutlined,
  HeartOutlined,
  SketchOutlined,
  ScheduleOutlined,
  UsergroupAddOutlined,
  ReadOutlined,
  MedicineBoxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { withRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
//路由懒加载
const Recommend = lazy(() => import("./views/tuijian/index")); //菜单
const Video = lazy(() => import("./views/shipin/index")); //视频
const Classify = lazy(() => import("./views/fenlei/index")); //分类
const Menu = lazy(() => import("./views/caidan/index")); //菜单
const Collect = lazy(() => import("./views/shouc/index")); //收藏

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menu: [
        {
          id: 1,
          title: "推荐",
          path: "/recommend",
          icon: <HomeOutlined style={{ fontSize: "22px" }} />,
        },
        {
          id: 2,
          title: "视频",
          path: "/video",
          icon: <PlayCircleOutlined style={{ fontSize: "22px" }} />,
        },
        {
          id: 3,
          title: "分类",
          path: "/classify",
          icon: <ScheduleOutlined style={{ fontSize: "22px" }} />,
        },
        {
          id: 4,
          title: "菜单",
          path: "/menu",
          icon: <SketchOutlined style={{ fontSize: "22px" }} />,
        },
        {
          id: 5,
          title: "收藏",
          path: "/collect",
          icon: <HeartOutlined style={{ fontSize: "22px" }} />,
        },
      ],
      sign: 1,
    };
  }
  setSign = (id) => {
    this.setState({
      sign: id,
    });
  };

  render() {
    const { menu, sign } = this.state;
    return (
      <div className="App">
        {/* 底部导航栏 */}
        <div className="tabbar">
          <Flex style={{ textAlign: "center" }}>
            {menu.map((item) => (
              <Flex.Item key={item.id}>
                <NavLink to={item.path}>
                  <div
                    className="flexItem"
                    style={item.id === sign ? { color: "#f15a4f" } : {}}
                    onClick={this.setSign.bind(this, item.id)}
                  >
                    {item.icon}
                    <p style={{ margin: "4px 0" }}>{item.title}</p>
                  </div>
                </NavLink>
              </Flex.Item>
            ))}
          </Flex>
        </div>

        {/* 路由 */}
        <Suspense fallback={<div>loading......</div>}>
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/video" component={Video} />
            <Route path="/classify" component={Classify} />
            <Route path="/menu" component={Menu} />
            <Route path="/collect" component={Collect} />
            <Route
              path="/nopage"
              render={() => (
                <div>
                  <h1>页面跑丢了！404</h1>
                </div>
              )}
            />
            {/* 
            Redirect 路由重定向
            exact 精确匹配
          */}
            <Redirect from="/" to="/recommend" exact />
            <Redirect to="/nopage" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
