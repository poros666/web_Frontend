import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import axios from 'axios'
import moment from 'moment'

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
}

export default class DeliverSystemAnnouncement extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.inputChange = this.inputChange.bind(this)
  //     this.state = {
  //       nameVl: '名字',
  //       nickname: '同济大学今天放暑假了吗',
  //     }
  //   }

  render() {
    const onFinish = (values) => {
      console.log('Success:', values)
      var data = {
        Title: values.announceTitle,
        Content: values.content,
        Time: moment().format("YYYY-MM-DD")
      }
      console.log("data:",data);
      var token = JSON.parse(localStorage.getItem('token')).token
      axios.post('/Notice', data, {
        headers: { Authorization: 'Bearer ' + token },
      }).then(res => {
        console.log(res);
      });
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }
    return (
      <Card title='发布系统公告' bordered={true}>
        <Form
          {...layout}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label='公告标题'
            name='announceTitle'
            rules={[
              {
                required: true,
                message: '请输入公告标题',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='公告内容'
            name='content'
            rules={[
              {
                required: true,
                message: '请输入公告内容！',
              },
            ]}>
            <Input.TextArea
              allowClear={true}
              autoSize={{ minRows: 20, maxRows: 100 }}
              placeholder='在此输入公告内容'
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              发布
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
  //   saveEdit() {
  //     //保存数据
  //   }
  //   inputChange(e) {
  //     let o = {}
  //     o[e.target.name] = e.target.value
  //     this.setState(o)
  //   }
}
