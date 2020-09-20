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
            data:JSON.parse(localStorage.getItem("userData")),
            //当前登录的用户数据
            image:null
        }
        console.log(this.state.data)
        Axios.get(this.state.data.icon)
        .then(res=>{
          this.setState({image:res.data})
        })
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
                                src={this.state.image} />
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
                                defaultValue={this.state.data.name} 
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
                                defaultValue={this.state.data.sex} 
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
                                defaultValue={this.state.data.nickname} 
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
                                defaultValue={this.state.data.phoneNum} 
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
                                defaultValue={this.state.data.emailAddress} 
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
                                defaultValue={this.state.data.school} 
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
                                defaultValue={this.state.data.studentNumber} 
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
                                defaultValue={this.state.data.college} 
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
                                defaultValue={this.state.data.grade} 
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
                                defaultValue={this.state.data.intro} 
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
                            <a href={'#/personal/account='+this.state.data.account+'/team'}>
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
        window.location.hash="#/personal/account="+this.state.data.account
    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
}
