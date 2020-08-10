import React, { Component } from "react"
import { Descriptions, Badge, Card, Button, Input } from "antd"
import { UserOutlined } from '@ant-design/icons';

export default class CompManagement extends Component {
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
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">
            2018-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">
            $80.00
          </Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">
            $60.00
          </Descriptions.Item>
          <Descriptions.Item label="Config Info">
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
      </Card>
    )
  }
}
