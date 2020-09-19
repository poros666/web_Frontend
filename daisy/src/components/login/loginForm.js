import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import {setToken} from "../../utils/auth"

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    let dataSent={
      Account:values.username,
      Password:values.password,
    }
    axios.post('/Users/Login',{
      Account:values.username,
      Password:values.password,
    })
    .then(response=>{
      console.log(response)
      setToken(response.data.jwt, values.username)
      window.alert("登陆成功")
      window.location.href='#/home'
    })
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名！',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号或邮箱" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码？
        </a>
      </Form.Item>
        
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        &nbsp;&nbsp;&nbsp;没有账号？<a href="#/register">现在注册！</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;