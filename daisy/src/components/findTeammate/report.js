import React, { useState,Component } from "react"
import { Modal, Form, Input, Checkbox, Row, Col, Popover } from "antd"
import { WarningOutlined} from "@ant-design/icons"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

//添加举报的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel,ReportUID,ReporterUID,Time }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="创建举报单"
      okText="确定"
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
        name="report_form_in_modal"
        initialValues={{
          tags: "not_started",
        }}
      >
        {/* key: "1",
        id: "37g7y128",
        time: "2020/3/14",
        reporter: "2020/4/14",
        target: "同济大学",
        type:["色情", "涉政"],
        tags: ["未处理"], */}
        <Form.Item
          name="time"
          label="举报时间"
          rules={[
            {
              required: true,
              message: "#",
            },
          ]}
        >
          <Input placeholder={Time} disabled/>
        </Form.Item>
        <Form.Item
          name="reporter_id"
          label="您的用户id"
          rules={[
            {
              required: true,
              message: "#",
            },
          ]}
        >
          <Input placeholder={ReporterUID} disabled/>
        </Form.Item>
        <Form.Item
          name="target_id"
          label="被举报用户id"
          rules={[
            {
              required: true,
              message: "#",
            },
          ]}
        >
          <Input placeholder={ReportUID} disabled/>
        </Form.Item>
        <Form.Item name="description" label="举报内容">
          <Input.TextArea
            allowClear={true}
            autoSize={{ minRows: 1, maxRows: 30 }}
            placeholder="在此输入举报原因等详情"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
        <Form.Item name="types">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="sex"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  色情
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="political"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  涉政
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="influence"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  影响他人
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="trade"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  涉及交易
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="attack"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  恶意
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="else"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  其他
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

//调用按钮
const CollectionsPageReport = ({ReporterUID,ReportUID,Time}) => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    console.log("Received values of form: ", values)
    //处理数据
    setVisible(false)
  }

  return (
    <Popover content={<p>report</p>}>
      <WarningOutlined
        onClick={() => {
          setVisible(true)
        }}
      />
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
        ReportUID={ReportUID}
        ReporterUID={ReporterUID}
        Time={Time}
      />
    </Popover>
  )
}


export default class Report extends Component {
  render() {
    return (
        <CollectionsPageReport ReportUID={this.props.ReportUID} ReporterUID={this.props.ReporterUID} Time={this.props.Time}/>
    )
  }
}