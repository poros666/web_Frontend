import React, { useState,Component } from "react"
import { Modal, Form, Input, Select,Popover,Button} from "antd"
import axios from 'axios'
import { isLogined } from "../../utils/auth";


const { Option } = Select;
axios.defaults.baseURL='/api';

//添加举报的弹出框
const CollectionCreateForm = ({ visible, onCreate, onCancel,ReportUID,ReporterUID,Time}) => {
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
      >
        <Form.Item
          name="time"
          label="举报时间"
        >
          <Input placeholder={Time} disabled/>
        </Form.Item>
        <Form.Item
          name="reporter_id"
          label="您的用户id"
        >
          <Input placeholder={ReporterUID} disabled/>
        </Form.Item>
        <Form.Item
          name="target_id"
          label="被举报帖子id"
        >
          <Input placeholder={ReportUID} disabled/>
        </Form.Item>
        <Form.Item name="types" label="举报类型" 
        rules={[{ required: true, message: '请选择举报类型' }]}>
        <Select style={{ width: 120 }}>
          <Option value="sex">色情</Option>
          <Option value="policy">涉政</Option>
          <Option value="effect">影响他人</Option>
          <Option value="trade">涉及交易</Option>
          <Option value="spite">恶意</Option>
      </Select>
        </Form.Item>
        <Form.Item name="description" label="举报内容" 
        rules={[{ required: true, message: '请填写举报内容' }]}>
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
const CollectionsPageReport = ({ReporterUID,ReportUID,Time}) => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    values.time=Time;
    values.reporter_id=ReporterUID;
    values.target_id=ReportUID;
    console.log("Received values of form: ", values)
    if(isLogined()){
      var token=JSON.parse( localStorage.getItem('token')).token
      let dataSent={
        account:values.reporter_id,
        reportType:values.types,
        content:values.description,
        time:values.time,
        targetType:'post',
        targetId:parseInt(values.target_id)
      }
      if(dataSent.account.length>0){
        console.log(dataSent)
      axios.post('/Report',dataSent,{headers: { "Authorization": 'Bearer ' +token }})
          .then(response=>{
            console.log(response)
            window.alert("举报成功")
          })
          .catch(error=>{
            console.log(error)
            if(error.response.status===409){
              window.alert('您已经举报过该帖子')
            }
            else{
              window.alert('举报失败')
            }
          })
        }
        else{
          window.alert("缺少需要填写项,举报失败")
        }
    }
    else{
      window.alert("未登录，确定后跳转至登陆界面")
      window.location.hash ='#/login'
    }
    //处理数据
    setVisible(false)
  }

  return (
    <Popover content={<p>report</p>}>
      <Button
      shape="round" 
      type="primary"
        onClick={() => {
          setVisible(true)
        }}
        style={{ width: 200,margin:'60px'}}
      ><p>举报该帖</p></Button>
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