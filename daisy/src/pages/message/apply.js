import React, { Component } from 'react'
import {Card,Tabs,Button} from 'antd'

const {TabPane}=Tabs;

export default class Apply extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Tabs tabPosition='left' id="tabs">
                    <TabPane tab="apply1" key="1">
                        1
                        <div className='apply_reply'>
                            <Button type='primary'>同意</Button>
                            <Button>拒绝</Button>
                        </div>
                    </TabPane>
                    <TabPane tab="apply2" key="2">
                        2
                        <div className='apply_reply'>
                            <Button type='primary'>同意</Button>
                            <Button>拒绝</Button>
                        </div>
                    </TabPane>
                    <TabPane tab="apply3" key="3">
                        3
                        <div className='apply_reply'>
                            <Button type='primary'>同意</Button>
                            <Button>拒绝</Button>
                        </div>
                    </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}