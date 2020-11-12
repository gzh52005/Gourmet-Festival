/* 推荐 */

import React from "react";
import "./index.css";
import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";


class recommend extends React.Component {
  render() {
    return (
      <div>
        {/* <WingBlank>
          <div className="sub-title">Normal</div>
        </WingBlank> */}
        <SearchBar
          className="top"
          placeholder="搜索百万免费菜谱"
          maxLength={8}
        />
        <WhiteSpace />
       

        <div className="box"></div>
      </div>
    );
  }
}

export default recommend;
