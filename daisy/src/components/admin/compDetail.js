import React, { useState } from "react"
import { Button, Modal, Form, Input, Radio } from "antd"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

//编辑比赛的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel,record }) => {
  const [form] = Form.useForm()
  const nameValidate =(rule, value, callback)=>{
    if(value> 100){
      callback("价格不能大于100")
    }else{
      callback()
    }
  }
  // console.log("hi", record)
  return (
    <Modal
      visible={visible}
      title="编辑比赛"
      okText="保存编辑"
      cancelText="取消编辑"
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
            {
              validator: nameValidate
            }
          ]}
        >
          <Input placeholder={record.Record.name}/>
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
          <Input placeholder={record.Record.start}/>
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
          <Input placeholder={record.Record.end}/>
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
          <Input placeholder={record.Record.sponsor}/>
        </Form.Item>

        <Form.Item name="description" label="比赛简介">
          <Input.TextArea
            allowClear={true}
            autoSize={{ minRows: 3, maxRows: 30 }}
            placeholder="在此输入比赛简介"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        <Form.Item
          name="tags"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="not_started">未开始</Radio>
            <Radio value="running">进行中</Radio>
            <Radio value="over">已结束</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

//调用按钮
const CompDetail = (e) => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    console.log("Received values of form: ", values)
    //处理数据
    setVisible(false)
  }

  return (
    <div>
      <Button
        type="default"
        onClick={() => {
          setVisible(true)
        }}
      >
        编辑
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
        record = {e}
      />
    </div>
  )
}

export default CompDetail
