import React, { Component } from 'react'
import {Card,List,Tabs} from 'antd'

const {TabPane}=Tabs

const Data = [
    {
      id:1,
      title: 'Ant Design Title 1',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      id:2,
      title: 'Ant Design Title 2',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      id:3,
      title: 'Ant Design Title 3',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      id:4,
      title: 'Ant Design Title 4',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    }]

export default class UserPost extends Component {
    constructor(props){
        super(props)
        this.state={
            momentData:Data,
            discussionData:Data,
            postData:Data
        }
    }
    render() {
        return (
            <div>
                <Tabs centered>
                    <TabPane tab="动态" key="1">
                        <List
                        style={{margin:20}}
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={this.state.momentData}
                        renderItem={item => (
                            <List.Item>
                                <Card>
                                    <a href={"#/Moment/"+item.id}>
                                        {item.title}
                                    </a>
                                </Card>
                            </List.Item>
                        )}
                        />
                    </TabPane>
                    <TabPane tab="讨论" key="2">
                        <List
                        style={{margin:20}}
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={this.state.discussionData}
                        renderItem={item => (
                            <List.Item>
                                <Card>
                                    <a href={"#/Moment/"+item.id}>  
                                        {item.title}
                                    </a>
                                </Card>
                            </List.Item>
                        )}
                        />
                    </TabPane>
                    <TabPane tab="帖子" key="3">
                        <List
                        style={{margin:20}}
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={this.state.postData}
                        renderItem={item => (
                            <List.Item>
                                <Card>
                                    <a href={"#/Moment/"+item.id}>
                                        {item.title}
                                    </a>
                                </Card>
                            </List.Item>
                        )}
                        />
                    </TabPane>
                </Tabs>
                
            </div>
        )
    }
}
