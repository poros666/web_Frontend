import React, { Component } from 'react'
import {Button,Card,Descriptions,Divider,Avatar,Input,Upload} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
import '../../style/personal/editInform.css'
import HeaderNav from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'
import Axios from 'axios'


const { TextArea } = Input;

var data=JSON.parse(localStorage.getItem("userData"))
//当前登录的用户数据
export default class EditInform extends Component {
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        //this.saveEdit=this.saveEdit.bind(this)
        this.state={
            data:JSON.parse(localStorage.getItem("userData"))
            //当前登录的用户数据
        }
        console.log(this.state.data)
        //给this.state赋值
    }

    render() {
        return (
            <div id='whole_page'>
                <HeaderNav/>
                <div className='pagecontent'>
                    <Card id='ed_card' title="修改个人资料" bordered={false}>
                        <Divider orientation="left">基本信息</Divider>
                        <Descriptions>
                            <Descriptions.Item label="头像">
                                <Avatar 
                                size={128}
                                src={this.state.data.icon} />
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button>
                                        <UploadOutlined /> 点击上传
                                    </Button>
                                </Upload>
                            </Descriptions.Item>
                        </Descriptions>
                        
                        <Descriptions bordered>
                            <Descriptions.Item 
                            label="名字"
                            >
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="Name" 
                                value={this.state.data.name} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="性别"
                            >
                                <TextArea
                                autoSize 
                                bordered={false}
                                name="Sex" 
                                value={this.state.data.sex} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="昵称"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="Nickname" 
                                value={this.state.data.nickname} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="手机"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="PhoneNum" 
                                value={this.state.data.phoneNum} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="邮箱"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="EmailAddress" 
                                value={this.state.data.emailAddress} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="学校"
                            >
                                <TextArea
                                autoSize
                                bordered={false}  
                                name="school" 
                                value={this.state.data.school} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="学号"
                            >
                                <TextArea
                                autoSize  
                                name="StudentNumber" 
                                bordered={false}
                                value={this.state.data.studentNumber} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="学院"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="College" 
                                value={this.state.data.college} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="年级"
                            >
                                <TextArea
                                autoSize 
                                bordered={false}
                                name="Grade" 
                                value={this.state.data.grade} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                        </Descriptions>
                        <Divider orientation="left">了解更多</Divider>
                        <Descriptions bordered>
                            <Descriptions.Item 
                            label="简介"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="Intro" 
                                value={this.state.data.intro} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                        </Descriptions>
                        <div className='saveButtons'>
                            <Button 
                            type='primary'
                            onClick={()=>this.saveEdit()}
                            >
                                保存
                            </Button>
                            <a href='#/personal/team'>
                                <Button>取消</Button>
                            </a>
                        </div>
                    </Card>
                </div>
                <Footer/>
            </div>
        )
    }
    saveEdit(){
        var token=JSON.parse( localStorage.getItem('token')).token

        Axios.put("/Users/"+this.state.data.account,this.state.data,{headers: { "Authorization": 'Bearer ' +token }})
        .then(response=>{
            console.log(response);})
        .catch(error=>{
            console.log(error);
          });
        console.log(this.state)
    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
}
