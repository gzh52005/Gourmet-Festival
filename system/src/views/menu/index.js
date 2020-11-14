import React, { useState } from "react";
import { PageHeader, Input, Row, Col, Button, Radio, Table, Image } from "antd";
import request from "../../api/menuApi";
import { AudioOutlined, DownloadOutlined } from "@ant-design/icons";
import "./index.css";

const { Search } = Input;

const columns = [
  {
    title: "菜单iD",
    dataIndex: "name",
  },
  {
    title: "菜单名称",
    dataIndex: "age",
  },
  {
    title: "菜单图片",
    dataIndex: "address",
  },
  {
    title: "菜单类型",
    dataIndex: "Types",
  },
  {
    title: "用户上传",
    dataIndex: "user",
  },
  {
    title: "操作",
    dataIndex: "operate",
  },
];

// const datalist = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward  ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     Types: 45,
//     operate: (
//       <div>
//         <Button
//           type="primary"
//           size="large"
//           style={{ background: "darkgoldenrod" }}
//         >
//           编辑
//         </Button>
//         <Button
//           type="primary"
//           size="large"
//           style={{ background: "red", marginLeft: "15px" }}
//         >
//           删除
//         </Button>
//       </div>
//     ),
//   });
// }

class Menu extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    datalist: [],
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  async componentDidMount() {
    const { data } = await request.get("/meishijie/getall", {});
    // console.log(data.datalist,"55555555")
    let arr = [];
    data.datalist.map((item,index) => {
     
      arr.push({
        key: item._id,
        name: item.author.id,
        age: item.title,
        address: (
          <Image
            style={{ margin: "auto" }}
            width={100}
            height={100}
            src={item.img}
          />
        ),
        Types: item.label ? item.label.name : "热门",
        operate: (
          <div>
            <Button
              type="primary"
              size="large"
              style={{ background: "darkgoldenrod" }}
            >
              编辑
            </Button>
            <Button
              type="primary"
              size="large"
              style={{ background: "red", marginLeft: "15px" }}
            >
              删除
            </Button>
          </div>
        ),
        user: item.author.nickname,
      });
    });
    this.setState({
      datalist: arr,
    });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="菜单管理"
          subTitle="This is a subtitle"
        />

        <Row className="input">
          <Col span={3}>
            <Input size="large" placeholder="请输入菜单ID" />
          </Col>
          <Col span={8} style={{ margin: "0 15px" }}>
            <Input size="large" placeholder="商品名称" />
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              size="large"
              style={{ background: "darkgoldenrod" }}
            >
              查询
            </Button>
            <Button type="primary" size="large" style={{ margin: "0 15px" }}>
              新增
            </Button>
            <Button type="default" size="large">
              重置
            </Button>
          </Col>
        </Row>

        <div className="table">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.datalist}
            bordered={true}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
