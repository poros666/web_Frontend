import React, { useState } from "react"
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
} from "antd"
import { QuestionCircleOutlined,UploadOutlined } from "@ant-design/icons"

const { Option } = Select
const AutoCompleteOption = AutoComplete.Option
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
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

const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const RegistrationForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      )
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "这不是合法的邮箱!",
          },
          {
            required: true,
            message: "请输入您的邮箱",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="手机号"
        rules={[
          {
            required: true,
            message: "请输入您的手机号",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: "请输入您的密码",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="再次输入密码"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "请再次输入密码",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
              }

              return Promise.reject(
                "两次密码不相符!"
              )
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label="姓名"
        rules={[
          {
            required: true,
            message: "请输入您的姓名",
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="sex"
        label="性别"
        rules={[
          {
            required: true,
            message: "请选择您的性别",
          },
        ]}
      >
        <Radio.Group>
          <Radio value="m">男</Radio>
          <Radio value="w">女</Radio>
          <Radio value="u">其他</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="school"
        label="学校"
        rules={[
          {
            required: true,
            message: "请输入您的学校",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="student_num"
        label="学号"
        rules={[
          {
            required: true,
            message: "请输入您的学号",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="major"
        label="专业"
        rules={[
          {
            required: true,
            message: "请输入您的专业",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="grade"
        label="年级"
        rules={[
          {
            required: true,
            message: "请选择您的年级",
          },
        ]}
      >
        <Cascader options={options} placeholder="请选择年级" />
      </Form.Item>

      <Form.Item
        name="nickname"
        extra="不填写默认为邮箱"
        label={
          <span>
            昵称&nbsp;
            <Tooltip title="朋友们要叫你什么呢?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="头像"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>
            <UploadOutlined /> 点击上传
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item name="intro" label="个人简介" extra="让大家详细地认识你!">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="slogan" label="个性签名" extra="来句口号!">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="验证码"
        extra="确保你是人类!"
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the captcha you got!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Should accept agreement"),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          我已阅读并同意 <a href="">《用户协议》</a> 及<a href="">《须知》</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegistrationForm
