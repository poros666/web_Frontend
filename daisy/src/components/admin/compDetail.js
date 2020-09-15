import React, { useState } from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd'
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

//编辑比赛的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel, record }) => {
  console.log('this is record inin:', record)
  const [form] = Form.useForm()
  const nameValidate = (rule, value, callback) => {
    if (value > 100) {
      callback('价格不能大于100')
    } else {
      callback()
    }
  }
  // console.log("hi", record)
  return (
    <Modal
      visible={visible}
      title='编辑比赛'
      okText='保存编辑'
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
            var data = {
              ProjectId: record.Record.id,
              Name: info.name,
              Introduction: info.description,
              ParticipantsNumber: info.number,
              StartTime: info.start,
              EndTime: info.end,
              Host: info.sponsor,
            }
            console.log(data);
            axios.put('http://mock-api.com/ZgBbVmgB.mock/api/Project/[id]', data).then(res => {
              console.log(res);
            })
          })
      }}>
      <Form
        form={form}
        layout='vertical'
        name='form_add_in_modal'
        initialValues={{
          tags: 'not_started',
        }}>
        <Form.Item
          name='name'
          label='比赛名字'
          initialValue={record.Record.name}
          rules={[
            {
              required: true,
              message: '请输入比赛名称',
            },
            {
              validator: nameValidate,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='number'
          label='参与人数'
          initialValue={record.Record.number}
          rules={[
            {
              required: true,
              message: '请输入参与人数',
            },
            {
              validator: nameValidate,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='start'
          label='开始时间'
          initialValue={record.Record.start}
          rules={[
            {
              required: true,
              message: '请输入比赛开始时间',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='end'
          label='结束时间'
          initialValue={record.Record.end}
          rules={[
            {
              required: true,
              message: '请输入比赛结束时间',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='sponsor'
          label='比赛主办方'
          initialValue={record.Record.sponsor}
          rules={[
            {
              required: true,
              message: '请输入比赛主办方名称',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item name='description' label='比赛简介' initialValue={record.Record.intro}>
          <Input.TextArea
            allowClear={true}
            autoSize={{ minRows: 3, maxRows: 30 }}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        <Form.Item
          name='tags'
          className='collection-create-form_last-form-item'>
          <Radio.Group>
            <Radio value='not_started'>未开始</Radio>
            <Radio value='running'>进行中</Radio>
            <Radio value='over'>已结束</Radio>
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
    console.log('Received values of form: ', values)
    //处理数据
    setVisible(false)
  }

  return (
    <div>
      <Button
        type='default'
        onClick={() => {
          setVisible(true)
        }}>
        编辑
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
        record={e}
      />
    </div>
  )
}

export default CompDetail
