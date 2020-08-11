import React, { Component } from 'react'
import {Card,Row,Col} from 'antd'
import '../../style/personal/myItem.css'
import {StarOutlined} from '@ant-design/icons'

export default class UserColle extends Component {
    render() {
        return (
            <div className="myitem">
              <Row gutter={16}>
                <Col span={8}>
                    <Card title="内容1" extra={<a><StarOutlined /></a>} className='myitem_card'>
                        balabalabala
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="内容2" extra={<a><StarOutlined /></a>} className='myitem_card'>
                        ababaabaaba
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="内容3" extra={<a><StarOutlined /></a>} className='myitem_card'>
                        balabalabalaabaabaaba
                    </Card>
                </Col>
              </Row>
            </div>
        )
    }
}
