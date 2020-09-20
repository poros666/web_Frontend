//界面完成，待和后端联调
import React, { Component } from 'react'
import {Card,Avatar,List,Button, Badge} from 'antd'
import { CheckCircleTwoTone, NotificationOutlined } from '@ant-design/icons';

import {isLogined} from "../../utils/auth"
import CONSTURL from '../../components/community/config';
import Axios from 'axios';

export default class Reply extends Component {
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
      .get(`/User/Reply/`+this.state.account,{
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
            <div className='reply'>
                <div style={{ marginLeft: '83%', marginTop: '10px', marginBottom: '10px' }}>
                  <Button 
                    size="large" 
                    icon={<CheckCircleTwoTone />}  
                    onClick={this.changeState.bind(this)}
                  >
                    全部已读
                  </Button>                
                </div>

                <Card id='reply_card' bordered={false}>
                <List 
                  itemLayout="vertical" 
                  dataSource={objArr} 
                  renderItem={item => (
                      <List.Item>

                        <Badge dot={this.state.show}>
                          <NotificationOutlined />
                        </Badge> 

                        <List.Item.Meta
                        //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={
                          <a href={"#/personal/account="+item.account}>{item.nickname}回复了你，快来看看吧！</a>
                        }
                        description={"原动态发于"+item.time}
                        />

                      </List.Item>
                )}
                />
                </Card>
            </div>
        )
    }
}