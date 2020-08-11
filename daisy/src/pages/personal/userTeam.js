import React, { Component } from 'react'
import {Card,Row,Col,Avatar} from 'antd'
import '../../style/personal/myItem.css'
import {EditOutlined} from '@ant-design/icons'

export default class UserTeam extends Component {
    render() {
        return (
            <div className="myitem">
              <Row gutter={16}>
                <Col span={8}>
                    <Card title="队名1" className='myitem_card'>
                        <p>比赛名</p>
                            <Avatar.Group>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Avatar.Group>
                        <a><EditOutlined/></a>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="队名2" className='myitem_card'>
                        <p>比赛名</p>
                            <Avatar.Group>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Avatar.Group>
                        <a><EditOutlined/></a>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="队名3" className='myitem_card'>
                        <p>比赛名</p>
                            <Avatar.Group>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Avatar.Group>
                        <a><EditOutlined/></a>
                    </Card>
                </Col>
              </Row>
            </div>
        )
    }
}
