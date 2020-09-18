import React, { useState } from "react"
import { Button, Modal, Form, Input, Radio } from "antd"
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

//添加比赛的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  const nameValidate = (rule, value, callback) => {
    if (value < 1) {
      callback('组队人数不能小于1人')
    }
    if (value > 100) {
      callback('组队人数不能大于100人')
    } else {
      callback()
    }
  }
  return (
    <Modal
      visible={visible}
      title="添加新比赛"
      okText="确定创建"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log("Validate Failed:", info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_add_in_modal"
        initialValues={{
          tags: "not_started",
        }}
      >
        {/* name= "John Brown"
        start= "2020/3/14"
        end= "2020/4/14"
        sponsor= "同济大学"
        tags= ["未开始"] */}
        <Form.Item
          name="name"
          label="比赛名字"
          rules={[
            {
              required: true,
              message: "请输入比赛名称",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="number"
          label="参赛人数"
          rules={[
            {
              required: true,
              message: "请输入参赛人数",
            },
            {
              validator: nameValidate,
            },
          ]}
        >
          <Input placeholder="1~100"/>
        </Form.Item>
        <Form.Item
          name="start"
          label="开始时间"
          rules={[
            {
              required: true,
              message: "请输入比赛开始时间",
            },
          ]}
        >
          <Input placeholder="类似2020-01-01"/>
        </Form.Item>
        <Form.Item
          name="end"
          label="结束时间"
          rules={[
            {
              required: true,
              message: "请输入比赛结束时间",
            },
          ]}
        >
          <Input placeholder={"类似2020-01-01"}/>
        </Form.Item>
        <Form.Item
          name="sponsor"
          label="比赛主办方"
          rules={[
            {
              required: true,
              message: "请输入比赛主办方名称",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="description" label="比赛简介" initialValue="暂无简介">
          <Input.TextArea
            allowClear={true}
            autoSize={{ minRows: 3, maxRows: 30 }}
            placeholder="在此输入比赛简介"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        
      </Form>
    </Modal>
  )
}

//调用按钮
const CollectionsPage = () => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    console.log("Received values of form: ", values)
    //处理数据
    var data = {
      Name: values.name,
      Introduction: values.description,
      ParticipantsNumber: Number(values.number) ,
      StartTime: values.start,
      EndTime: values.end,
      Host: values.sponsor
    }
    console.log("data:",data);
    var token=JSON.parse( localStorage.getItem('token')).token
    axios.post('/Project',data,{headers: { "Authorization": 'Bearer ' +token }}).then(res=>{
      console.log(res);
    })
    setVisible(false)
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
        style={{ marginBottom: 10 }}
      >
        新建比赛
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default CollectionsPage
