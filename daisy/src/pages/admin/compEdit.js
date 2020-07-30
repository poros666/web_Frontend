import React from "react"
import { Form, Card, Input, Button, message } from "antd"

function CompEdit(props) {
  return (
    <Card title="添加新比赛">
      <Form>
        <Form.Item label="name" 
      validateStatus="error"
      help="Should be combination of numbers & alphabets">
          
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">save</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default (CompEdit)
