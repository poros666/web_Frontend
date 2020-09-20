import React, { useState } from 'react'
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload,
  Radio,
  InputNumber,
  Card,
} from 'antd'
import { QuestionCircleOutlined, UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

const { Option } = Select
const AutoCompleteOption = AutoComplete.Option
const options = [
  {
    value: 'middle',
    label: '中学',
    children: [
      {
        value: 'junior',
        label: '初中',
        children: [
          {
            value: '7',
            label: '初一',
          },
          {
            value: '8',
            label: '初二',
          },
          {
            value: '9',
            label: '初三',
          },
        ],
      },
      {
        value: 'senior',
        label: '高中',
        children: [
          {
            value: '10',
            label: '高一',
          },
          {
            value: '11',
            label: '高二',
          },
          {
            value: '12',
            label: '高三',
          },
        ],
      },
    ],
  },
  {
    value: 'university',
    label: '大学',
    children: [
      {
        value: 'undergraduate',
        label: '本科生',
        children: [
          {
            value: 'u1',
            label: '大一',
          },
          {
            value: 'u2',
            label: '大二',
          },
          {
            value: 'u3',
            label: '大三',
          },
          {
            value: 'u4',
            label: '大四',
          },
        ],
      },
      {
        value: 'postgraduate',
        label: '硕士生',
        children: [
          {
            value: 'p1',
            label: '研一',
          },
          {
            value: 'p2',
            label: '研二',
          },
          {
            value: 'p3',
            label: '研三',
          },
          {
            value: 'p4',
            label: '研四',
          },
        ],
      },
      {
        value: 'doctoral',
        label: '博士生',
        children: [
          {
            value: 'd',
            label: '在读博士生',
          },
          {
            value: 'phd',
            label: '毕业博士生',
          },
        ],
      },
    ],
  },
]

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const normFile = (e) => {
  console.log('Upload event:', e)

  if (Array.isArray(e)) {
    return e
  }

  return e && e.fileList
}

/* 压缩base64图片，怎么压缩base64是题外话，这里不赘述 */
function compress(
  base64, // 源图片
  rate, // 缩放比例
  // callback // 回调
) {
  //处理缩放，转格式
  var _img = new Image()
  _img.src = base64
  console.log("w",_img.width)
  var _canvas = document.createElement('canvas')
    var w = _img.width / rate
    var h = _img.height / rate
    _canvas.setAttribute('width', w)
    _canvas.setAttribute('height', h)
    _canvas.getContext('2d').drawImage(_img, 0, 0, w, h)
    var nbase64 = _canvas.toDataURL('image/jpeg')
    console.log("bbb",nbase64)
  return nbase64
}

const RegistrationForm = () => {
  const [form] = Form.useForm()
  const [so, setSo] = useState(false)

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  
    var base64 = values.upload[0].thumbUrl
    console.log(base64)
    var newbase64 = compress(base64,2)
    console.log(newbase64)
    // , function (base64) {
    //   console.log("new base64:",base64)
    //   setSo(base64)
    // }

    let dataSent = {
      Account: values.account,
      Name: values.name,
      Password: values.password,
      Nickname: values.nickname,
      PhoneNum: values.phone.toString(),
      EmailAddress: values.email,
      Sex: values.sex,
      School: values.school,
      College: values.major,
      Grade: values.grade,
      StudentNumber:values.student_num.toString(),
      Intro: values.intro,
      Icon: newbase64
    }
    console.log("dataSent:",dataSent)
    axios.post('/Users', dataSent).then((response) => {
      console.log(response)
      window.alert('注册成功')
    })
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}>
        <Option value='86'>+86</Option>
      </Select>
    </Form.Item>
  )
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))

  const nameValidate = (rule, value, callback) => {
    if (value < 1) {
      callback('年级不可以小于1')
    }
    if (value > 30) {
      callback('年级不可以大于30')
    } else {
      callback()
    }
  }

  return (
    <Card className='register-card' title='注册' size='default' bordered={true}>
      <br />
      <Form
        {...formItemLayout}
        form={form}
        name='register'
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        scrollToFirstError>
        <Form.Item
          name='account'
          label='账户名'
          rules={[
            {
              type: 'string',
              message: '用户名要是字符串!',
            },

            {
              required: true,
              message: '请输入您的账户名',
            },
          ]}
          hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: '这不是合法的邮箱!',
            },
            {
              required: true,
              message: '请输入您的邮箱',
            },
          ]}
          hasFeedback>
          <Input />
        </Form.Item>

        <Form.Item
          name='phone'
          label='手机号'
          rules={[
            {
              required: true,
              message: '请输入您的手机号',
            },
          ]}
          hasFeedback>
          <InputNumber
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item
          name='password'
          label='密码'
          rules={[
            {
              required: true,
              message: '请输入您的密码',
            },
          ]}
          hasFeedback>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='再次输入密码'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再次输入密码',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject('两次密码不相符!')
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='name'
          label='姓名'
          rules={[
            {
              required: true,
              message: '请输入您的姓名',
            },
          ]}
          hasFeedback>
          <Input />
        </Form.Item>

        <Form.Item
          name='sex'
          label='性别'
          rules={[
            {
              required: true,
              message: '请选择您的性别',
            },
          ]}>
          <Radio.Group>
            <Radio value='male'>男</Radio>
            <Radio value='female'>女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name='school'
          label='学校'
          rules={[
            {
              required: true,
              message: '请输入您的学校',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          name='student_num'
          label='学号'
          rules={[
            {
              type: 'number',
              message: '学号必须是数字!',
            },

            {
              required: true,
              message: '请输入您的学号',
            },
          ]}>
          <InputNumber />
        </Form.Item>

        <Form.Item
          name='major'
          label='专业'
          rules={[
            {
              required: true,
              message: '请输入您的专业',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          name='grade'
          label='学历'
          extra='从一年级开始每年加1！'
          rules={[
            {
              type: 'number',
              message: '学历必须是数字!',
            },
            {
              required: true,
              message: '请输入您的学历',
            },
          ]}>
          <InputNumber min={1} max={30} />
        </Form.Item>

        <Form.Item
          name='nickname'
          initialValue={Form.name}
          label={
            <span>
              昵称&nbsp;
              <Tooltip title='朋友们要叫你什么呢?'>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: '请输入您的昵称',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          name='upload'
          label='头像'
          valuePropName='fileList'
          getValueFromEvent={normFile}>
          <Upload name='logo' action='/upload.do' listType='picture'>
            <Button>
              <UploadOutlined /> 点击上传
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name='intro'
          label='个人简介'
          extra='让大家详细地认识你!'
          initialValue={'暂无简介'}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name='slogan'
          label='个性签名'
          extra='来句口号!'
          initialValue={'暂无口号'}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label='验证码' extra='确保你是人类!'>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name='captcha'
                noStyle
                rules={[
                  {
                    required: true,
                    message: '请输入你收到的验证码',
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('需要先阅读并同意以上内容！'),
            },
          ]}
          {...tailFormItemLayout}>
          <Checkbox>
            我已阅读并同意 <a href=''>《用户协议》</a> 及<a href=''>《须知》</a>
          </Checkbox>
        </Form.Item>
        <br></br>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            注册
          </Button>
          &nbsp;&nbsp;&nbsp;已有账号？<a href='#/login'>现在登录！</a>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default RegistrationForm
