import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

//添加比赛的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_add_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        {/* name= "John Brown"
        start= "2020/3/14"
        end= "2020/4/14"
        sponsor= "同济大学"
        tags= ["未开始"] */}
        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
              message: '请输入比赛名称',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="start"
          label="start"
          rules={[
            {
              required: true,
              message: '请输入比赛开始时间',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="end"
          label="end"
          rules={[
            {
              required: true,
              message: '请输入比赛结束时间',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="sponsor"
          label="sponsor"
          rules={[
            {
              required: true,
              message: '请输入比赛主办方名称',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

//按钮
const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    //处理数据
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        style={{marginBottom: 10}}
      >
        Add
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default CollectionsPage