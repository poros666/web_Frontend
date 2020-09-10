import { PageHeader,Descriptions } from 'antd';
import { Input } from 'antd';
import React, { Component } from 'react'
import '../../style/findTeam/findTeam.css'

export default class teamNav extends Component {

  /*接收比赛名称*/
  constructor(props){
    super(props)

    var tempName=this.props.matchName

    this.state={
        matchName:tempName,
        info:"这是一个比谁睡觉睡得更久的比赛"
    }
}

  render() {
    const { Search } = Input;
    return (
    <>
      <div id="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title={this.state.matchName}
        >
          <Descriptions size="small">
            <Descriptions.Item label="比赛简介">{this.state.info}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      </>
    )
  }
}