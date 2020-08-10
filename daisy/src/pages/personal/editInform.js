import React, { Component } from 'react'
import {Input,Button,Card} from 'antd'
import '../../style/personal/editInform.css'
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'

const { TextArea } = Input

export default class EditInform extends Component {
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.state={
            account:'11111',
            nameVl:'做个人吧',
            nickname:'同济大学有暑假吗',
            phone_num:'11112344321',
            email_address:'11112344321@163.com', 
            sex:'男',
            student_number:'1850000',
            school:'同济大学',
            college:'软件学院', 
            grade:'2018级',
            intro:'阿巴阿巴阿巴阿巴',
            signature:'是个疯子',
            qq:'1235678432',
            wechat:'11112344321', 
            weibo:'https://weibo.com/wflanker?profile_ftype=1&is_all=1#_0'
        }
    }

    render() {
        return (
           <div>
               <HeaderNav/>
               <MastHead/>
               <div className="site-card-border-less-wrapper">
                <Card className='ed_card' title="修改个人资料" bordered={false}>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='姓名' 
                        name="nameVl" 
                        value={this.state.nameVl} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='昵称' 
                        name="nickname" 
                        value={this.state.nickname} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='手机' 
                        name="phone_num" 
                        value={this.state.phone_num} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='邮箱' 
                        name="email_address" 
                        value={this.state.email_address} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='性别' 
                        name="sex" 
                        value={this.state.sex} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='学号' 
                        name="student_number" 
                        value={this.state.student_number} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='学校' 
                        name="school" 
                        value={this.state.school} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='学院' 
                        name="college" 
                        value={this.state.college} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='年级' 
                        name="grade" 
                        value={this.state.grade} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='个签' 
                        name="signature" 
                        value={this.state.signature} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='qq号' 
                        name="qq" 
                        value={this.state.qq} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='微信' 
                        name="wechat" 
                        value={this.state.wechat} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <Input 
                        addonBefore='微博' 
                        name="weibo" 
                        value={this.state.weibo} 
                        onChange={this.inputChange}/>
                    </div>
                    <div style={{marginBottom:16}}>
                        <TextArea 
                        name="intro" 
                        value={this.state.intro} 
                        onChange={this.inputChange}
                        autoSize/>
                    </div>
                    <div className='buttons'>
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
        console.log(o)
        this.setState(o)
    }
}
