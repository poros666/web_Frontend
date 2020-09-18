import React, { Component } from 'react'
import {Card,List} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default class UserTeam extends Component {
    constructor(props){
        super(props)
        this.state={
          data:[]
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get('/Usergroups/'+this.props.account,{headers: { "Authorization": 'Bearer ' +token }})
        .then((res)=>{
            this.setState({
                data:res.data,
            })
        })
        .catch(function(error){
            console.log(error)
         })
    }

    render() {
        return (
            <div>
                <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                        title={item.teamname}
                        extra={<div>
                                <Link to={{pathname:"#/editteam/"+item.teamID,
                                            query:{
                                                GroupId:item.groupId,
                                                ProjectId:item.projectId,
                                            }}}>
                                    <EditOutlined/>
                                    </Link>
                                  </div>
                        }>
                            <p>
                                简介：{item.introduction}
                            </p>
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        )
    }
}
