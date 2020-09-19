import React, { Component } from 'react'
import {Card,List,Tabs} from 'antd'

import {isLogined} from "../../utils/auth"
import Axios from 'axios';

export default class TeamMesage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          account:this.state.match.params.account,
          data:[]
        };
      }
        
  componentDidMount(){
    if(isLogined()){
      var token = JSON.parse(localStorage.getItem('token')).token;
      Axios
        .get('/User/GroupMessage/' + this.state.account,  {
        headers: { "Authorization": 'Bearer ' + token },
      })
      .then((res) => {
        console.log(res)
        var result=res.data
        this.setState({data:result})
      })
    }
  }

    render() {
        //初始化render数组状态
        let objArr=this.state.data
        return (
            <div>
                <Card>
                    <List 
                    itemLayout="horizontal" 
                    dataSource={objArr} 
                    renderItem={item => (
                        <List.Item>
                        <List.Item.Meta
                        //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={item.title}
                        description={"小队名称："+item.groupName+"     "+"所属比赛名称："+item.projectName+"    "+"通知时间："+item.time}
                        />
                        <div>{item.content}</div>
                        </List.Item>
                    )}
                    />
                </Card>
            </div>
        )
    }
}