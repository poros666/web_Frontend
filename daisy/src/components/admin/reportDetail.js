import React, { useState } from "react"
import { Button, Modal, Form, Descriptions } from "antd"

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
  return (
    <Modal
      visible={visible}
      width= "800px"
      title="举报详情"
      okText="解决举报"
      cancelText="返回"
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
      <Descriptions title="举报详情" bordered>         
        <Descriptions.Item label="举报者"><a href="#/admin/userManagement">a留待传数据id</a></Descriptions.Item>
        <Descriptions.Item label="被举报者"><a href="#/admin/userManagement">留待传数据id</a></Descriptions.Item>
        <Descriptions.Item label="时间">$60.00</Descriptions.Item>
        <Descriptions.Item label="详细描述">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}

//调用按钮
const ReportDetail = () => {
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
        处理
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

export default ReportDetail
