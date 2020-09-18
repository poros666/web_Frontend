import { PageHeader,Descriptions } from 'antd';
import React, { Component } from 'react'
import axios from 'axios'
import '../../style/findTeam/findTeam.css'

axios.defaults.baseURL='/api';

export default class teamNav extends Component {

  /*接收比赛名称*/
  constructor(props){
    super(props);
    let matchId=this.props.matchId;
    this.state={
      matchName:'',
      matchIntroduction:'',
      matchMaxMemberNum:''
    }
    axios.get('/Project/'+matchId)
    .then(response=>{
      console.log(response.data)
      this.setState({
        matchName:response.data.name,
        matchIntroduction:response.data.introduction,
        matchMaxMemberNum:response.data.participantsNumber
      })
  })
  .catch(error=>{
    window.alert('连接出错，点击确定返回主页')
    window.location.hash ='#/home'
    console.log(error);
  })
}

render() {
  let MaxNum=this.state.matchMaxMemberNum.toString()
    return (
    <>
      <div id="site-page-header-ghost-wrapper">
        <div id='title'>
        <PageHeader
          ghost={false}
          title={this.state.matchName}
        >
          <Descriptions size="small">
            <Descriptions.Item label="比赛简介">{this.state.matchIntroduction}</Descriptions.Item>
          </Descriptions>
          <Descriptions size="small">
            <Descriptions.Item label="队伍人数上限">{MaxNum}人</Descriptions.Item>
          </Descriptions>
        </PageHeader>
        </div>
      </div>
      </>
    )
  }
}