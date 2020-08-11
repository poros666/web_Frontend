import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {UserOutlined,EditOutlined} from '@ant-design/icons'

export default class MastHead extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}} >
                <Card id='mastHead_card' bordered={false}>
                <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />}/>
                <p id='mastHead_name'>my name</p>
                <p id='mastHead_slogan'>my slogan</p>
                <a><EditOutlined/></a>
                </Card>
            </div>
        )
    }
}