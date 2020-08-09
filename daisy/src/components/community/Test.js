//基本上是模拟一个沙盒的情况


import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';



const Demo = () => {


  return (
    <Form
    
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
       name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
              name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input/>
      </Form.Item>


      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};




export default class Test extends Component {
    render() {
        return (
            <div>
                <Demo/>
            </div>
        )
    }
}
