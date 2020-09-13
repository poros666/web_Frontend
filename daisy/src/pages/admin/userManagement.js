import React, { Component } from "react"
import { Descriptions, Badge, Card, Button, Input } from "antd"
import { UserOutlined } from '@ant-design/icons';

export default class UserManagement extends Component {
  render() {
    return (
      <Card
        title="管理用户"
        extra={
          <div>
            <Input size="large" placeholder="请输入用户id" prefix={<UserOutlined />} style={{ marginRight: 20, marginBottom: 20}}/>
            <Button type="primary" style={{ marginBlock: 20 , float: "right"}}>
              查找
            </Button>
          </div>
        }
      >
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="id">s4f45g6g</Descriptions.Item>
          <Descriptions.Item label="account">Prepaid</Descriptions.Item>
          <Descriptions.Item label="name">YES</Descriptions.Item>
          <Descriptions.Item label="nickname">
            2018-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="phone_num" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="email_address" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="sex">
            $80.00
          </Descriptions.Item>
          <Descriptions.Item label="school">$20.00</Descriptions.Item>
          <Descriptions.Item label="college">
            $60.00
          </Descriptions.Item>
          <Descriptions.Item label="grade">Prepaid</Descriptions.Item>
          <Descriptions.Item label="student_number">Prepaid</Descriptions.Item>
          <Descriptions.Item label="qq">Prepaid</Descriptions.Item>
          <Descriptions.Item label="wechat">Prepaid</Descriptions.Item>
          <Descriptions.Item label="weibo">Prepaid</Descriptions.Item>
          <Descriptions.Item label="icon_url">Prepaid</Descriptions.Item>
          <Descriptions.Item label="status">Prepaid</Descriptions.Item>
          <Descriptions.Item label="start_time">Prepaid</Descriptions.Item>
          <Descriptions.Item label="length">Prepaid</Descriptions.Item>
          <Descriptions.Item label="intro">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
          </Descriptions.Item>
          <Descriptions.Item label="signature">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    )
  }
}
