import React, { Component } from 'react'
import {Card,Divider, Descriptions} from 'antd'
import Axios from 'axios'

export default class UserInform extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            account:this.props.match.params.account
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get('/User/'+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
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
                            {this.state.data.name}
                        </Descriptions.Item>
                        <Descriptions.Item label='昵称'>
                            {this.state.data.nickname}
                        </Descriptions.Item>
                        <Descriptions.Item label='性别'>
                            {this.state.data.sex}
                        </Descriptions.Item>
                        <Descriptions.Item label='手机号'>
                            {this.state.data.phoneNum}
                        </Descriptions.Item>
                        <Descriptions.Item label='邮箱'>
                            {this.state.data.emailAddress}
                        </Descriptions.Item>
                        </Descriptions>
                    <Divider orientation="left">教育信息</Divider>
                    <Descriptions>
                        <Descriptions.Item label='学校'>
                            {this.state.data.school}
                        </Descriptions.Item>
                        <Descriptions.Item label='学号'>
                            {this.state.data.studentNumber}
                        </Descriptions.Item>
                        <Descriptions.Item label='学院'>
                            {this.state.data.college}
                        </Descriptions.Item>
                        <Descriptions.Item label='年级'>
                            {this.state.data.grade}
                        </Descriptions.Item>
                    </Descriptions>
                    <Divider orientation="left">了解更多</Divider>
                    <Descriptions>
                        <Descriptions.Item label='简介'>
                            {this.state.data.intro}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        )
    }
}
