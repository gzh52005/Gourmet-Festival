import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/menu">菜谱</Link>
        </li>
        <li>
          <Link to="/users">用户管理</Link>
        </li>
        <li>
          <Link to="/login">登录</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
