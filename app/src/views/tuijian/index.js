/* 推荐 */

import React from "react";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";
import Silde from './silde'
import Tjlink from './tjlinks'
import Three from './three'
class recommend extends React.Component {
  render() {
    return (
      <div id="tuijian">
        <div className="box">
          <div className="search_button">
            <a><SearchOutlined />搜索百万免费菜谱</a>
          </div>
          <div className="search_bottom"></div>
          <div className="titlesw">
            <h3 className="title_s2">今日热门</h3>
          </div>
          <div className="silde_window">
            {/* 轮播图 */}
            <Silde />
          </div>
          <div className="titlesw">
            <h3 className="title_s2">为你推荐</h3>
          </div>
          <div className="tjlinksw">
            {/* 推荐连接 */}
            <Tjlink/>
          </div>

          <Three/>
        </div>
      </div>
    );
  }
}

export default recommend;
