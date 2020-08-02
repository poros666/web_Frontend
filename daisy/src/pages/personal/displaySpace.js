import React, { Component } from 'react'
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'
import '../../style/personal/space.css'
import {Tabs} from 'antd'


const {TabPane} =Tabs

export default class DisplaySpace extends Component {
    render() {
        return (
            <div className='space'>
                <HeaderNav/>
                {/*这个页面是向其他人展示某个用户的
                但是现在用的都是账号本身视角的组件 */}
                <MastHead/>
                <Tabs defaultActiveKey="1" centered className='space_tabs'>
                    <TabPane tab="TA的资料" key="1">
                      <MyInform/>
                    </TabPane>
                    <TabPane tab="TA的队伍" key="2">
                      <MyTeam/>
                    </TabPane>
                    <TabPane tab="TA的比赛" key="3">
                      <MyComp/>
                    </TabPane>
                    <TabPane tab="TA的收藏" key="4">
                      <MyColle/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
