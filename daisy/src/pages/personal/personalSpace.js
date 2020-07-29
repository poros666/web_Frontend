import React, { Component } from 'react'
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'
import {Tabs} from 'antd'
import '../../style/personal/personalSpace.css'
import MyTeam from '../../components/personal/myTeam'
import MyComp from '../../components/personal/myComp'
import MyColle from '../../components/personal/myColle'

const {TabPane} =Tabs

export default class PersonalSpace extends Component {
    render() {
        return (
            <div id='personalSpace'>
                <HeaderNav/>
                <MastHead/>
                <Tabs defaultActiveKey="1" centered id='perSpace_tabs'>
                    <TabPane tab="我的队伍" key="1">
                      <MyTeam/>
                    </TabPane>
                    <TabPane tab="我的比赛" key="2">
                      <MyComp/>
                    </TabPane>
                    <TabPane tab="我的收藏" key="3">
                      <MyColle/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
