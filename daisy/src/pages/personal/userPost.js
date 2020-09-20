import React, { Component } from 'react'
import {Card,List,Tabs} from 'antd'
import axios from 'axios'
import {DeleteOutlined} from '@ant-design/icons';
import { isLogined } from '../../utils/auth';
import Meta from 'antd/lib/card/Meta';
const {TabPane}=Tabs

export default class UserPost extends Component {
    constructor(props){
        super(props)
        this.state={
            momentData:[],
            discussionData:[],
            postData:[],
            account:this.props.match.params.account,
            role:isLogined?(this.props.match.params.account===JSON.parse(localStorage.getItem('userData')).account?1:0):0,
        }
    }

    componentDidMount()
    {
        var token=JSON.parse( localStorage.getItem('token')).token
        axios.get('/User/Post/'+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
        .then((res)=>{
            this.setState({
                postData:res.data
            })
        })
        .catch(function(error){
            console.log(error)
         })
         axios.get('/User/Moment/'+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
         .then((res)=>{
            this.setState({
                momentData:res.data
            })
         })
         .catch(function(error){
             console.log(error)
          })
          axios.get('/User/Discussion/'+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
         .then((res)=>{
            this.setState({
                discussionData:res.data
            })
         })
         .catch(function(error){
             console.log(error)
          })

    }

    deleteDiscuss(disId,ProId)
    {   
        var token=JSON.parse( localStorage.getItem('token')).token
        axios.delete('/discussion?discussionId='+disId+'&projectId='+ProId,{headers: { "Authorization": 'Bearer ' +token }})
        .catch(error=>{console.log(error)})
    }
    deleteMoment(Mid)
    {
        var token=JSON.parse( localStorage.getItem('token')).token
        axios.delete('/Moment/'+Mid,{headers: { "Authorization": 'Bearer ' +token }})
        .catch(error=>{console.log(error)})
    }
    render() {
        return (
            <div>
                <Tabs centered>
                    <TabPane tab="动态" key="1">
                        <List
                        style={{margin:20}}
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={this.state.momentData}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                 actions={[
                                    <DeleteOutlined onClick={()=>{this.deleteMoment(item.momentId)}}/>
                                 ]}>
                                    <Meta
                                        title={
                                            <a href={"#/Moment/"+item.momentId}>
                                            {item.content}
                                            </a>}
                                        description="This is the description"/>
                                </Card>
                            </List.Item>
                        )}
                        />
                    </TabPane>
                    <TabPane tab="讨论" key="2">
                        <List
                        style={{margin:20}}
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={this.state.discussionData}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                 actions={[
                                    <DeleteOutlined onClick={()=>{this.deleteDiscuss(item.discussionId,item.projectId)}}/>
                                 ]}>
                                    <Meta
                                        title={item.discussionId}
                                        description={item.content}/>
                                </Card>
                            </List.Item>
                        )}
                        />
                    </TabPane>
                    <TabPane tab="帖子" key="3">
                        <List
                        style={{margin:20}}
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={this.state.postData}
                        renderItem={item => (
                            <List.Item>
                                <Card>
                                        {item.name}
                                </Card>
                            </List.Item>
                        )}
                        />
                    </TabPane>
                </Tabs>
                
            </div>
        )
    }
}
