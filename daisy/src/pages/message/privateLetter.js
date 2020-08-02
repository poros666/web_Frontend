import React, { Component } from 'react'
import {Card,Tabs} from 'antd'

const {TabPane}=Tabs;

export default class PrivateLetter extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Tabs tabPosition='left' id="tabs">
                    <TabPane tab="letter1" key="1">
                    1
                    </TabPane>
                    <TabPane tab="letter2" key="2">
                      2
                    </TabPane>
                    <TabPane tab="letter3" key="3">
                     3
                    </TabPane>
                    <TabPane tab="letter4" key="4">
                     4
                    </TabPane>
                    <TabPane tab="letter5" key="5">
                      5
                    </TabPane>
                    <TabPane tab="letter6" key="6">
                      6
                    </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}