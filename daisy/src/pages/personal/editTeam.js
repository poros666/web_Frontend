import React, { Component } from 'react'
import {Card,Badge,Avatar,Input, Descriptions, Button} from 'antd'
import HeaderNav from '../../components/comm/HeaderNav'
import '../../style/personal/editteam.css'
import { CloseOutlined } from '@ant-design/icons'
import Footer from '../../components/comm/Footer'
import Axios from 'axios'

const { TextArea } = Input;


export default class EditTeam extends Component{
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.state={
           Name:[],
           Introduction:[],
           GroupId:this.props.location.query.GroupId,
           ProjectId:this.props.location.query.ProjectId,
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get('/Usergroup?GroupId='+this.props.location.query.GroupId+'&ProjectId='+this.props.location.query.ProjectId,
        {headers: { "Authorization": 'Bearer ' +token }})
        .then((res)=>{
            this.setState({
                Name:res.data.name,
                Introduction:res.data.introduction
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
        Axios.delete('/Member',{ProjectId:parseInt(this.state.ProjectId),GroupId:parseInt(this.state.GroupId),Account:account},
        {headers: { "Authorization": 'Bearer ' +token }})
        .catch(function(error){
            console.log(error)
            window.alert("删除失败")
         })
    }

    handleClick(){
        var content={
            GroupId:this.state.GroupId,
            ProjectId:this.state.ProjectId,
            Name:this.state.name,
            Introduction:this.state.Introduction
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.put('/Usergroups',content,{headers: { "Authorization": 'Bearer ' +token }})
        .then(
            window.alert("修改成功")
        )
        .catch(function(error){
            console.log(error)
            window.alert("修改失败")
         })
    }
    render(){
        return(
            <div id='editteam_page'>
                <HeaderNav/>
                <div id='edteam_content'>
                    <Card
                    id='editteam_card'>
                        <p>teamID:{this.props.match.params.teamID}</p>
                        <Descriptions 
                        bordered
                        column={1}>
                            <Descriptions.Item
                            label='队名'>
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="teamname" 
                                value={this.state.data.teamname} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item
                            label='简介'>
                                <TextArea
                                autoSize
                                bordered={false} 
                                name="description" 
                                value={this.state.data.description} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item
                            label='成员'>
                                <div style={{width:700}}>
                                {
                                this.state.data.member.map((item)=>{
                                    return(
                                        <span className="avatar-item">
                                            <Badge 
                                            count={
                                                <Button 
                                                id='delete_button'
                                                type="primary" 
                                                danger 
                                                shape='circle' 
                                                size='small'
                                                icon={<CloseOutlined/>}
                                                onClick={this.deleteMember(item.account)}
                                                />
                                            }>
                                                <Avatar 
                                                size={64} 
                                                shape="circle" 
                                                src={item}
                                                />
                                            </Badge>
                                        </span>
                                    )
                                })
                                }
                                </div>
                            </Descriptions.Item>
                        </Descriptions>
                        <div className='saveButtons'>
                            <Button type='primary' onClick={this.handleClick}>保存</Button>
                            <Button>取消</Button>
                        </div>
                    </Card>
                </div>
                <Footer/>
            </div>
        )
    }
}