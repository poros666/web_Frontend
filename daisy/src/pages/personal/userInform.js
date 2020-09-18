import React, { Component } from 'react'
import {Card,Divider, Descriptions} from 'antd'
import Axios from 'axios'

export default class UserInform extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get('/Users/'+this.props.account,{headers: { "Authorization": 'Bearer ' +token }})
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        .catch(function(error){
            console.log(error)
         })
    }
    render() {
        return (
            <div>
                <Card>
                    <Divider orientation="left">基本信息</Divider>
                    <Descriptions>
                        <Descriptions.Item label='名字'>
                            {this.state.data.Name}
                        </Descriptions.Item>
                        <Descriptions.Item label='昵称'>
                            {this.state.data.nickname}
                        </Descriptions.Item>
                        <Descriptions.Item label='性别'>
                            {this.state.data.Sex}
                        </Descriptions.Item>
                        <Descriptions.Item label='手机号'>
                            {this.state.data.PhoneNum}
                        </Descriptions.Item>
                        <Descriptions.Item label='邮箱'>
                            {this.state.data.EmailAddress}
                        </Descriptions.Item>
                        </Descriptions>
                    <Divider orientation="left">教育信息</Divider>
                    <Descriptions>
                        <Descriptions.Item label='学校'>
                            {this.state.data.school}
                        </Descriptions.Item>
                        <Descriptions.Item label='学号'>
                            {this.state.data.StudentNumber}
                        </Descriptions.Item>
                        <Descriptions.Item label='学院'>
                            {this.state.data.College}
                        </Descriptions.Item>
                        <Descriptions.Item label='年级'>
                            {this.state.data.Grade}
                        </Descriptions.Item>
                    </Descriptions>
                    <Divider orientation="left">了解更多</Divider>
                    <Descriptions>
                        <Descriptions.Item label='简介'>
                            {this.state.data.Intro}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        )
    }
}
