import React, { Component } from 'react'
import {Card,Row,Col} from 'antd'
import '../../style/personal/myItem.css'

export default class UserComp extends Component {
    render() {
        return (
            <div className="myitem">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="比赛1" className='myitem_card'>
                    balabalabala
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="比赛2" className='myitem_card'>
                    ababaabaaba
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="比赛3" className='myitem_card'>
                    balabalabalaabaabaaba
                  </Card>
                </Col>
              </Row>
            </div>
        )
    }
}
