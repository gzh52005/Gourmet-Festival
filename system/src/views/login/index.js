import React from "react";
import "./index.css";
import { Form, Input, Button, Checkbox, message } from "antd";
import request from "../../untils/request";
function Login(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = async (values) => {
    console.log("Success:", values);
    const { data } = await request.get("/user/login", {
      name: values.username,
      password: values.password,
      token: values.remember,
    });
    if (data.code == 2000) {
      console.log(props, "88888888888");
      props.history.push("/app");
    } else {
      message.error("用户名或密码错误!!!");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-container">
      <Form
        style={{ marginTop: "250px" }}
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="demo-ruleForm"
      >
        <h1 className="text">欢迎登录美食杰后台系统</h1>

        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "用户名不能为空" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>7天免登陆</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
