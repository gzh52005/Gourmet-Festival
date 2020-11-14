import React,{useState,useEffect} from "react";
import {Form,Input,Button,message} from 'antd';
import request from '../../untils/request';
import userApi from '../../api/userApi';
import "../../css/users/userEdit.css"

const layout ={
    labelCol:{span:4},
    wrapperCol:{span:16},
};

const validateMessages={
    required:'${label} 不能为空！',
};

// const user={
//     username:'',
//     sex:'',
//     address='',
//     pic='',
// }

// const success = (msg) => {
//     message.success(msg);
// };
// const error = (msg) => {
//     message.error(msg);
// };

function Edit(props){
    // useState: 返回一个数据[状态，修改状态的方法] 
    const [user,editUser] = useState({
             username:'',
             sex:'',
             address:'',
             pic:'',
         }) 

     // 用法3：空依赖（等效于componentDidUpdate）
     useEffect(function(){
        // 这里的代码只有初始化时执行
        console.log(props,"父组件传入的方法")
    },[])

    //     onFinish = async values => {
    //     // console.log(this.props);
    //     const { username, role, gender } = values
    //     const { id: _id } = this.props.match.params
    //     let data = {}
    //     if (_id) {

    //         // data = await userApi.editUser(_id,username, gender,address)

    //     } else {
    //         data = await request.post('/user/ ', { username, role, gender })
    //     }
    //     if (data.data.code === 1) {
    //         message.success('操作成功')
    //         this.props.history.push('/app/users')
    //     } else {
    //         message.error("操作失败")
    //     }
    //     // console.log(data)
    // };
    
   
     

    console.log("666", user)

    return(
       <div className="edit">
        <div className="divedit">
            <p>编辑用户</p>
            <Button className="closeEdit" onClick={props.closeEdit}>X</Button>
            <Form {...layout} name="nest-messages"  validateMessages={validateMessages}
            >
                <Form.Item name='username' label="用户名" rules={[{ required: true }]} >
                    <Input />
                </Form.Item>
                {/* <Form.Item name={['user', 'password']} label="密码" rules={[{ required: true }]}>
                    <Input />
                </Form.Item> */}
                <Form.Item name='gender' label="性别">
                    <Input />
                </Form.Item>
                <Form.Item name='adress' label="地址">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit" >
                        提交
                </Button>
                    <Button type="primary" htmlType="reset" style={{ marginLeft: 20 }} onClick={props.closeEdit}>
                        取消
                </Button>
                </Form.Item>

            </Form >    
            </div>
        </div>
    )
}

export default Edit