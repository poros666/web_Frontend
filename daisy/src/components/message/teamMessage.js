import React, { Component } from 'react'
import {Card,Tabs} from 'antd'

const {TabPane}=Tabs;

export default class TeamMesage extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Tabs tabPosition='left' id="tabs">
                    <TabPane tab="team1" key="1">
                    1
                    </TabPane>
                    <TabPane tab="team2" key="2">
                      2
                    </TabPane>
                    <TabPane tab="team3" key="3">
                     3
                    </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}