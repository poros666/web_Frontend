import React, { Component } from 'react'
import {Card,Divider, Descriptions} from 'antd'

export default class UserInform extends Component {
    constructor(props){
        super(props)
        this.state={
            nameVl:'名字',
            nickname:'同济大学今天放暑假了吗',
            phone_num:12345677654,
            email_address:'12345677654@136.com',
            sex:'男',
            stuNum:1850000,
            school:'同济大学',
            major:'软件学院',
            grade:'2018级',
            intro:'请在这里这里阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴一大串', 
            icon:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        }
    }
    render() {
        return (
            <div>
                <Card>
                    <Divider orientation="left">基本信息</Divider>
                    <Descriptions>
                        <Descriptions.Item label='名字'>
                            {this.state.nameVl}
                        </Descriptions.Item>
                        <Descriptions.Item label='昵称'>
                            {this.state.nickname}
                        </Descriptions.Item>
                        <Descriptions.Item label='性别'>
                            {this.state.sex}
                        </Descriptions.Item>
                        <Descriptions.Item label='手机号'>
                            {this.state.phone_num}
                        </Descriptions.Item>
                        <Descriptions.Item label='邮箱'>
                            {this.state.email_address}
                        </Descriptions.Item>
                        </Descriptions>
                    <Divider orientation="left">教育信息</Divider>
                    <Descriptions>
                        <Descriptions.Item label='学校'>
                            {this.state.school}
                        </Descriptions.Item>
                        <Descriptions.Item label='学号'>
                            {this.state.stuNum}
                        </Descriptions.Item>
                        <Descriptions.Item label='学院'>
                            {this.state.major}
                        </Descriptions.Item>
                        <Descriptions.Item label='年级'>
                            {this.state.grade}
                        </Descriptions.Item>
                    </Descriptions>
                    <Divider orientation="left">了解更多</Divider>
                    <Descriptions>
                        <Descriptions.Item label='简介'>
                            {this.state.intro}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        )
    }
}
