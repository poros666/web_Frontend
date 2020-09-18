import React, { Component } from 'react'
import {Card,List,Avatar} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

const teamData = [
    {
        teamID:1,
        compID:1,
        teamname:'team 1',
        limit:10,
        compname: 'comp 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        member:[
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        ]
    },
    {
        teamID:2,
        compID:2,
        teamname:'team 2',
        limit:7,
        compname: 'comp 2',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        member:[
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        ]
    },
    {
        teamID:3,
        compID:3,
        teamname:'team 3',
        limit:5,
        compname: 'comp 3',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          member:[
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        ]
    },
    {
        teamID:4,
        compID:4,
        teamname:'team 4',
        limit:3,
        compname: 'comp 4',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          member:[
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        ]
    }]


export default class UserTeam extends Component {
    constructor(props){
        super(props)
        this.state={
          data:teamData
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        axios.get('/Usergroups/'+this.props.account,{headers: { "Authorization": 'Bearer ' +token }})
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
                                            query:{/*这里放比赛id队伍id名字和简介*/}}}>
                                    <EditOutlined/>
                                    </Link>
                                  </div>
                        }>
                            <p>
                                <a href={"#/compPage/"+item.compID+"=id"+item.compID}>
                                    {item.compname}
                                </a>
                            </p>
                            <p>
                                最多人数{item.limit}
                            </p>
                            <p>
                                简介：{item.description}
                            </p>
                            <Avatar.Group maxCount={6}>
                                {
                                    item.member.map((item,index)=>{
                                        return <Avatar src={item} key={index}/>

                                    })
                                }
                            </Avatar.Group>
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        )
    }
    handleChangePage(teamID)
    {
      this.context.router.push(
        {
          path:'#/team/'+teamID,
          ID:teamID
        }
      )
    }
}
