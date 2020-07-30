import React, { Component } from 'react'
import {Card,Avatar,List} from 'antd'

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

export default class SystemNotice extends Component {
    render() {
        return (
            <div className='notice'>
                <Card id='notice_card' bordered={false}>
                <List itemLayout="horizontal" dataSource={data} renderItem={item => (
                    <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    </List.Item>
                )}
                />
                </Card>
            </div>
        )
    }
}