import React, { Component } from 'react'
import {Card, List, Popover, Button, Badge} from 'antd'
import { CheckCircleTwoTone, NotificationOutlined } from '@ant-design/icons';

import {isLogined} from "../../utils/auth"

import Axios from 'axios';

export default class TeamMesage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          account:'',
          data:[],
          show: true
        };
    }

    changeState() {
    this.setState({ show: false });
    };

    componentDidMount(){
        if(isLogined()){
            var token = JSON.parse(localStorage.getItem('token')).token
            var tempAccount = JSON.parse(localStorage.userData).account;
            this.state.account = tempAccount;
            Axios
            .get(`/groupMessage/`+this.state.account,{
                headers: { Authorization: 'Bearer ' + token },
            })
            .then((res) => { 
            var result=res.data
            this.setState({data:result})
            console.log(res)
            })
        }
    }

    render() {
        //初始化render数组状态
        let objArr=this.state.data

        return (
            <div className='team_message'>

                <div style={{ marginLeft: '83%', marginTop: '10px', marginBottom: '10px' }}>
                  <Button 
                    size="large" 
                    icon={<CheckCircleTwoTone />}  
                    onClick={this.changeState.bind(this)}
                  >
                    全部已读
                  </Button>                
                </div>

                <Card id='team_message_card' bordered={false}>
                    <List
                    itemLayout="vertical"
                    dataSource={objArr} 
                    renderItem={item => (
                        <List.Item>

                            <Badge dot={this.state.show}>
                                <NotificationOutlined />
                            </Badge> 

                            <List.Item.Meta
                            title={
                                <a href={"#/compPage/id="+item.projectId+'/'}>
                                  {item.title}
                                </a>
                            }
                            description={item.time}
                            />

                            <Popover placement="rightBottom" content={item.groupName} title={"所属比赛："+item.projectName}>
                                {item.content}
                                {/* 内容 */}
                            </Popover>

                        </List.Item>
                    )}
                    />
                </Card>
            </div>
        )
    }
}