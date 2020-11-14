import React from "react";
import { PageHeader,Table, Button, Pagination,message,Space,Popconfirm ,Row, Col, Input} from "antd";
import userApi from "../../api/userApi";
import Edit from "./userEdit"
// function Users(){
//     return(
//         <div>
//             用户管理
//         </div>
//     )
// }

class Users extends React.Component{
    constructor(){
        super();
        this.state={
            columns:[
                //列数据
                {
                    title:"用户名",
                    dataIndex:"name",
                    key:"name",
                },
                {
                    title:"性别",
                    dataIndex:"sex",
                    key:"sex",
                },
                {
                    title:"住址",
                    dataIndex:"address",
                    key:"address",
                },
                {
                    title:"头像",
                    dataIndex:"pic",
                    key:"pic",
                    render:(pic,data) => {
                        // console.log(pic, 789);
            return <img src={pic} style={{ width: "50px" }} alt={data.name} />;
                    }
                },
                {
                    title: "操作",
          dataIndex: "action",
          key: "action",
          render: (action, row) => {
            // // console.log("TableUser -> constructor -> action", action);
            // // console.log("TableUser -> constructor -> row", row);
            //render有两个参数:参数一：行传过来的数据；参数二:对应那行的数据
            //直接渲染到操作这一列
            // console.log(action, 9990);
            return (
              <React.Fragment>
                {/* {action &&
                  action.map((item) => {
                    return (
                      <Button key={item.id} type={item.type}>
                        {item.tex}
                      </Button>
                    );
                  })} */}
                <Button type="primary" onClick={this.showEdit.bind(this)}>编辑</Button> &nbsp; &nbsp;
 
                <Button
                  type="danger"
                  onClick={this.delUser.bind(this, row._id)}
                >
                  删除
                </Button>

                {/* <Popconfirm
                title="是否删除该用户?"
    onConfirm={this.confirm}
    onCancel={this.cancel}
    okText="Yes"
    cancelText="No"
  >
    <a>nihao</a>
  </Popconfirm> */}
              </React.Fragment>
            );
          },
                },
            ],
            dataSource: [
                //行数据
                // {
                //   key: _id,
                //   name: "胡彦斌",
                //   sex: 32,
                //   address: "西湖区湖底公园1号",
                //   pic: "http://dummyimage.com/50x50",
                //   action: [
                //     {
                //       id: 1,
                //       tex: "编辑",
                //       type: "ghost",
                //     },
                //     {
                //       id: 2,
                //       tex: "删除",
                //       type: "dashed",
                //     },
                //   ],
                // },
              ],
              page:1, //当前页码
              pageSize:10, //一页多少条
              search:{}, //查询条件
              total: 0, //总条数
              rowKey: [], //选中的行对应_id，用于删除多条数据
              showEdit:false,//是否显示编辑页面
        }
        this.fetchData=this.fetchData.bind(this)
    }

    //功能：获取列表数据
    fetchData(){
        let{page,pageSize,search} = this.state;
        userApi.getlist(page,pageSize,search).then((res) => {
            console.log(res.data);
            let arr = res.data.datalist;
      arr.forEach((item) => {
        //给每一条数据添加一个key值。就用_id来做key值
        item.key = item._id;
      });
      this.setState({
        dataSource: arr,
        total: res.data.total,
      });
        });
    }

    //功能：进入页面就立马执行，获取数据
    componentDidMount() {
        this.fetchData(); //进入页面就发起请求获取第一页数据
    }

    //显示编辑页面
    showEdit(){
      this.setState({
        showEdit:true
      })
      console.log(this.state.showEdit,'edit');
    }

    //关闭编辑页面
    closeEdit(){
      this.setState({
        showEdit:false
      })
    }

    //功能：翻页功能
    changePage(page,pageSize){
// console.log("TableUser -> changePage -> pageSize", pageSize);
//     console.log("TableUser -> changePage -> page", page);
    if (pageSize !== this.state.pageSize) {
      page = 1;
      // console.log("回到第一页");
    }
    this.setState({
      page,
      pageSize,
    });
    this.fetchData(); //翻页功能
    }

    //功能：删除某个用户
    delUser(id){
      console.log("删除用户",id);
      //发起ajax请求删除远程用户
      userApi.delUser(id).then((res) =>{
        console.log('delres',res);
        if(res.data.flag){
          //删除成功
          message.success('删除成功');
          
          //1.直接重新获取新数据：耗费性能
          // this.fetchData();
          //2.删除state的那条数据：性能更好
          let arr = this.state.dataSource.filter((item) => item._id != id);
          this.setState({
            dataSource:arr,
          });
          
        }else{
          //删除失败
          message.error('删除失败');
        }
      })
    }

    //功能：获取选中行的数据
    delMany(selectedRowKeys, selectedRows){

    }

    //功能：删除多条数据
    delAll(){
        console.log("我要删除的数据是",this.state.rowKey);
    }

    //删除按钮确认
    // confirm() {
    //   // this.delUser();
    //   // console.log(e);
    //   message.success('Click on Yes');
    // }
    
    // cancel(e) {
    //   console.log(e);
    //   message.error('Click on No');
    // }

    render() {
        const rowSelection = {
          // onChange: (selectedRowKeys, selectedRows) => {
          //   console.log(
          //     `selectedRowKeys: ${selectedRowKeys}`,
          //     "selectedRows: ",
          //     selectedRows
          //   );
          // },
          onChange: this.delMany.bind(this), //当选中复选框的时候就会触发这个事件
          // onChange: this.rowSelect.bind(this),
          getCheckboxProps: (record) => {
            // console.log(record);
            return {
              //   disabled: record.key === "1", // Column configuration not to be checked
              name: record.name,
            };
          },
        };
        const {showEdit} = this.state;
        return (
          // <div className={style['tbpadding']}>
          // <div style={{ padding: "50px" }}>
          //   <Table
          //     rowSelection={rowSelection}
          //     dataSource={this.state.dataSource}
          //     columns={this.state.columns}
          //     bordered
          //     footer={() => <Button type="danger">全部删除</Button>}
          //     pagination={{
          //       position: ["bottomCenter"],
          //       defaultCurrent: 1,
          //       total: 50,
          //     }}
          //   />
          

          <div style={{ padding: "0px,50px,50px,50px" }}>
            <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="用户管理"
          subTitle="This is a subtitle"
        />

        {showEdit ? <Edit closeEdit={this.closeEdit.bind(this)}/>:''}

        <Row className="input">
          <Col span={3}>
            <Input size="large" placeholder="请输入用户id" />
          </Col>
          <Col span={8} style={{ margin: "0 15px" }}>
            <Input size="large" placeholder="用户名"/>
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
            {/* 表格组件 */}
            <Table
            style={{marginTop:'20px'}}
              rowSelection={rowSelection}
              dataSource={this.state.dataSource}
              columns={this.state.columns}
              bordered
              footer={() => (
                <Button type="danger" onClick={this.delAll.bind(this)}>
                  全部删除
                </Button>
              )}
              pagination={false}
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {/* 分页组件 */}
              <Pagination
                showQuickJumper
                defaultCurrent={this.state.page}
                total={this.state.total}
                onChange={this.changePage.bind(this)}
              />
            </div>
          </div>
        );
      }
}

export default Users;