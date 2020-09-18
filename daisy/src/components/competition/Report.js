import React, { useState,Component } from "react"
import { Modal, Form, Input,Select, Popover } from "antd"
import { WarningOutlined} from "@ant-design/icons"
import axios from "axios"
import moment from 'moment'
import { isLogined } from "../../utils/auth";
const { Option } = Select;




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
          initialValue={Time}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="reporter_id"
          label="举报者ID"
          rules={[
            {
              required: true,
              message: "#",
            },
          ]}
          initialValue={ReporterUID}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="target_id"
          label="被举报者ID"
          rules={[
            {
              required: true,
              message: "#",
            },
          ]}
          initialValue={ReportUID}
        >
          <Input/>
        </Form.Item>
        <Form.Item name="types" label="举报类型" 
        rules={[{ required: true, message: '请选择举报类型' }]}>
        <Select initialValues="色情" style={{ width: 120 }}>
          <Option value="sex">色情</Option>
          <Option value="policy">涉政</Option>
          <Option value="effect">影响他人</Option>
          <Option value="trade">涉及交易</Option>
          <Option value="spite">恶意</Option>
    </Select>
        </Form.Item>
        <Form.Item name="description" label="举报内容">
          <Input.TextArea
            allowClear={true}
            autoSize={{ minRows: 1, maxRows: 30 }}
            placeholder="在此输入举报原因等详情"
          />
        </Form.Item>
</Form>
    </Modal>
  )
}

//调用按钮
const CollectionsPageReport = ({ReporterUID,ReportUID,Time,compID}) => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    console.log("Received values of form: ", values)
    //处理数据
    values.time=moment(Time).format('YYYY-MM-DDTHH:mm:ssC');
    values.reporter_id=ReporterUID;
    values.target_id=ReportUID;
    console.log("Received values of form: ", values)
    let dataSent={
      Account:values.reporter_id,
      ReportType:values.types,
      Content:values.description,
      Time:values.time,
      TargetType:'discussion',
      TargetId:values.target_id
    }
    console.log(dataSent)
    if(isLogined()){
      var token=JSON.parse( localStorage.getItem('token')).token
      axios.post('/Report',dataSent, {headers: { "Authorization": 'Bearer ' +token }})
        .then(response=>{
          console.log(response)
          window.alert("举报成功")
        })
      }
      else{
        window.alert("举报失败")
      }
    setVisible(false)
  }

  return (
    <Popover content={<p>report</p>}>
      <WarningOutlined
        onClick={() => {
          if(!isLogined())
          {
            window.alert("未登录，确定后跳转至登陆界面")
            window.location.hash ='#/login'
            return 
         }
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
