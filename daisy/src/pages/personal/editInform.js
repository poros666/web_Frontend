import React, { Component } from 'react'
import {Button,Card,Descriptions,Divider,Avatar} from 'antd'
import '../../style/personal/editInform.css'
import HeaderNav from '../../components/comm/HeaderNav'
import TextArea from 'antd/lib/input/TextArea'


export default class EditInform extends Component {
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
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
            slogan:'是个疯子',
            qq: 1235678454,
            wechat:'12345677654',
            weibo:'https://weibo.com/wflanker',
            icon:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        }
    }

    render() {
        return (
            <div>
                <HeaderNav/>
                <div className='pagecontent'>
                    <Card id='ed_card' title="修改个人资料" bordered={false}>
                        <Divider orientation="left">基本信息</Divider>
                        <Descriptions>
                            <Descriptions.Item label="头像">
                                <Avatar 
                                size={128}
                                src={this.state.icon} />
                            </Descriptions.Item>
                        </Descriptions>
                        
                        <Descriptions bordered>
                            <Descriptions.Item 
                            label="名字"
                            >
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="nameVl" 
                                value={this.state.nameVl} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="性别"
                            >
                                <TextArea
                                autoSize 
                                bordered={false}
                                name="sex" 
                                value={this.state.sex} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="昵称"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="nickname" 
                                value={this.state.nickname} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="手机"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="phone_num" 
                                value={this.state.phone_num} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="邮箱"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="email_address" 
                                value={this.state.email_address} 
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
                                value={this.state.school} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="学号"
                            >
                                <TextArea
                                autoSize  
                                name="stuNum" 
                                bordered={false}
                                value={this.state.stuNum} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="学院"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="major" 
                                value={this.state.major} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="年级"
                            >
                                <TextArea
                                autoSize 
                                bordered={false}
                                name="grade" 
                                value={this.state.grade} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                        </Descriptions>

                        <Divider orientation="left">了解更多</Divider>
                        <Descriptions bordered>
                            <Descriptions.Item 
                            label="qq"
                            >
                                <TextArea
                                autoSize
                                bordered={false} 
                                name="qq" 
                                value={this.state.qq} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="微信"
                            >
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="wechat" 
                                value={this.state.wechat} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="微博"
                            >
                                <TextArea
                                autoSize
                                bordered={false}  
                                name="weibo" 
                                value={this.state.weibo} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="用一句话描述自己"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="slogan" 
                                value={this.state.slogan} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item 
                            label="简介"
                            >
                                <TextArea
                                autoSize  
                                bordered={false}
                                name="intro" 
                                value={this.state.intro} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                        </Descriptions>
                        <div className='saveButtons'>
                            <Button type='primary'>保存</Button>
                            <Button>取消</Button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
}
