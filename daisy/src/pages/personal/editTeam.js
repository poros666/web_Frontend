import React, { Component } from 'react'
import {Card,Badge,Avatar,Input, Descriptions, Button} from 'antd'
import HeaderNav from '../../components/comm/HeaderNav'
import '../../style/personal/editteam.css'
import { CloseOutlined } from '@ant-design/icons'
import Footer from '../../components/comm/Footer'
import Axios from 'axios'
import { List } from 'antd/lib/form/Form'

const { TextArea } = Input;


export default class EditTeam extends Component{
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.state={
           name:[],
           Introduction:[],
           GroupId:this.props.location.query.GroupId,
           ProjectId:this.props.location.query.ProjectId,
           account:this.props.location.query.Account
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get('/Usergroup?GroupId='+this.props.location.query.GroupId+'&ProjectId='+this.props.location.query.ProjectId,
        {headers: { "Authorization": 'Bearer ' +token }})
        .then((res)=>{
            this.setState({
                name:res.data.name,
                Introduction:res.data.introduction,
                memberList:res.data.memberList
            })
        })
        .catch(function(error){
            console.log(error)
         })

    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
    //删除队员
    deleteMember(account){
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.delete('/Member',{ProjectId:parseInt(this.state.ProjectId),GroupId:parseInt(this.state.GroupId),Account:account},
        {headers: { "Authorization": 'Bearer ' +token }})
        .catch(function(error){
            console.log(error)
            window.alert("删除失败")
         })
    }

    handleClick(){
        var content={
            groupId:this.state.GroupId,
            projectId:this.state.ProjectId,
            name:this.state.name,
            introduction:this.state.Introduction
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.put('/Usergroup',content,{headers: { "Authorization": 'Bearer ' +token }})
        .then(
            window.alert("修改成功")
        )
        .catch(function(error){
            console.log(error)
            window.alert("修改失败")
         })
         window.location.hash="#/personal/account"+this.state.account
    }
    render(){
        return(
            <div id='editteam_page'>
                <HeaderNav/>
                <div id='edteam_content'>
                    <Card
                    id='editteam_card'>
                        <p>teamName:{this.props.match.params.teamID}</p>
                        <Descriptions 
                        bordered
                        column={1}>
                            <Descriptions.Item
                            label='队名'>
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="name" 
                                defaultValue={this.state.name} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item
                            label='简介'>
                                <TextArea
                                autoSize
                                bordered={false} 
                                name="Introduction" 
                                defaultValue={this.state.Introduction} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                        </Descriptions>
                        <div className='saveButtons'>
                            <Button type='primary' onClick={()=>{this.handleClick()}}>保存</Button>
                            <Button>取消</Button>
                        </div>
                    </Card>
                </div>
                <Footer/>
            </div>
        )
    }
}