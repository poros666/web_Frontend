import React, { useState } from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd'
import moment from 'moment'
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

//编辑比赛通知的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel,name, id }) => {
  const [form] = Form.useForm()
  const nameValidate = (rule, value, callback) => {
    if (value > 100) {
      callback('价格不能大于100')
    } else {
      callback()
    }
  }

  return (
    <Modal
      visible={visible}
      title='发布比赛通知'
      okText='发布'
      cancelText='取消编辑'
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}>
        <div></div>
      <Form
        form={form}
        layout='vertical'
        name='form_notice_in_modal'
        initialValues={{
          tags: 'not_started',
        }}>
        
        <Form.Item name='name' label='所属比赛名字' initialValue={name}>
          <Input disabled/>
        </Form.Item>
        <Form.Item name='id' label='所属比赛ID' initialValue={id}>
          <Input disabled/>
        </Form.Item>
        <Form.Item name='time' label='发布时间' initialValue={moment().format("YYYY-MM-DD")}>
          <Input disabled/>
        </Form.Item>
        <Form.Item
          name='title'
          label='通知标题'
          rules={[
            {
              required: true,
              message: '请输入比赛通知标题',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          name='description'
          label='比赛通知内容'
          rules={[
            {
              required: true,
              message: '请输入比赛通知内容',
            },
          ]}>
          <Input.TextArea
            allowClear={true}
            autoSize={{ minRows: 6, maxRows: 30 }}
            placeholder='在此输入比赛通知内容'
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
      </Form>
    </Modal>
  )
}

//调用按钮
const CompNotice = (e) => {
  const [visible, setVisible] = useState(false)
  console.log(e)
  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    // 处理数据
    var data = {
      ProjectId: e.Record.id,
      Title: values.title,
      Content: values.description,
      Time: values.time
    }
    console.log("data:",data);
    var token = JSON.parse(localStorage.getItem('token')).token
    axios.post('/Notification',data, {
      headers: { Authorization: 'Bearer ' + token },
    }).then(res=>{
      console.log(res);
    })
    setVisible(false)
  }
  // console.log("here" ,e.Record)
  return (
    <div>
      <Button
        type='default'
        onClick={() => {
          setVisible(true)
        }}>
        发布比赛通知
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
        name={e.Record.name}
        id={e.Record.id}
      />
    </div>
  )
}

export default CompNotice
