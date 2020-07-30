import React, { Component } from 'react'
import HeaderNav from '../../components/comm/HeaderNav'
import {Tabs} from 'antd'
import {MailOutlined} from '@ant-design/icons'
import '../../style/message/messageCenter.css'
import SystemNotice from '../../components/message/systemNotice'
import CompNotice from '../../components/message/compNotice'
import Reply from '../../components/message/reply'
import PrivateLetter from '../../components/message/privateLetter'
import TeamMessage from '../../components/message/teamMessage'
import Apply from '../../components/message/apply'

const {TabPane} =Tabs

export default class MessageCenter extends Component{
    render(){
        return(
            <div>
                <HeaderNav/>
                <div>
                  <p id="side_bar_tittle"><MailOutlined/>消息中心</p>
                  <Tabs tabPosition='left' id="tabs">
                    <TabPane tab="系统公告" key="1">
                      <SystemNotice/>
                    </TabPane>
                    <TabPane tab="比赛通知" key="2">
                      <CompNotice/>
                    </TabPane>
                    <TabPane tab="回复我的" key="3">
                      <Reply/>
                    </TabPane>
                    <TabPane tab="私信" key="4">
                      <PrivateLetter/>
                    </TabPane>
                    <TabPane tab="队伍消息" key="5">
                      <TeamMessage/>
                    </TabPane>
                    <TabPane tab="组队申请" key="6">
                      <Apply/>
                    </TabPane>
                  </Tabs>
                </div>
            </div>
        )
    }
}