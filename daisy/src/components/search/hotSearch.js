//日后补充：data来源和链接跳转的目标（该关键词的搜索结果）

import React, { Component } from 'react'
import { List, Divider, Layout } from 'antd';
import { FireOutlined } from '@ant-design/icons';

export default class HotSearch extends Component {
    render() {

        const { Content } = Layout;

        const data = [
            {
              title: '老蕾',
            },
            {
              title: '老番茄',
            },
            {
              title: '北子哥',
            },
            {
              title: '某幻',
            },
            {
                title: '中国拜',
            },
            {
                title: '老蕾',
            },
            {
                title: '老番茄',
            },
            {
                title: '北子哥',
            },
            {
                title: '某幻',
            },
            {
                title: '中国拜',
            },
        ];

        return (

            <div>
                <Layout className="hotSearchBox" style={{ width: '86%', margin: '5% 7%', padding: '0 20px' }}>
                    <Content style={{ padding: '0 5px' }}>
                        
                        <Divider orientation="left"><FireOutlined/>热门搜索</Divider>
                        
                        <List
                        grid={{ column: '4' }}
                        size='large'
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                />
                            </List.Item>
                        )}
                        />
                    </Content>
                </Layout>              
            </div>

        )
    }
}
