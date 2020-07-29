import React, { Component } from 'react'
import {List} from 'antd'
import 'antd/dist/antd.css';

const listData = [
    {
        href: 'https://ant.design',
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        href: 'https://ant.design',
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        href: 'https://ant.design',
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        href: 'https://ant.design',
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }
];


export default class CompetitionList extends Component {
    render() {
        return (
            <div>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 3,position:"both"
              }}
              dataSource={listData}
              renderItem={item => (
                <List.Item>
                    <img
                      width={272}
                      alt="logo"
                      src={item.logosrc}
                    />
                    <List.Item.Meta
                    title={<a href={item.href}>{item.competitionname}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
              )}
            />
            </div>
        )
    }
}
