import React, { Component } from 'react'
import {Card,List} from 'antd'

const postData = [
    {
      Pid:1,
      title: 'Ant Design Title 1',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      Pid:2,
      title: 'Ant Design Title 2',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Pid:3,
      title: 'Ant Design Title 3',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Pid:4,
      title: 'Ant Design Title 4',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    }]

export default class UserPost extends Component {
    constructor(props){
        super(props)
        this.state={
            data:postData
        }
    }
    render() {
        return (
            <div>
                <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                        title={
                            <a href={"#/ReadPost/"+item.Pid}>
                                {item.title}
                            </a>
                        }>
                            {item.description}
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        )
    }
}
