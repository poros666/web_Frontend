import React, { Component } from 'react'
import { Form, Radio, Layout } from 'antd';
import { FireOutlined, FieldTimeOutlined, CommentOutlined, BellOutlined } from '@ant-design/icons';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import axios from 'axios'
axios.defaults.baseURL='/api';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default class SearchContent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        kw: this.props.match.params.kwundefined,
        order: 1
      }
    }
    
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };

    orderChange(e){
      console.log('radio checked', e.target.value);
      this.setState({
        order: e.target.value
      })
      console.log('radio checked', this.state.order);
    }

    render() {
      //  console.log(this.props);
       // console.log(this.state.kw);
        return (
            <Layout>
            <Form
            layout="inline"
            className="components-table-demo-control-bar"
            style={{ marginBottom: 16, marginLeft: 20}}
            >
                <Form.Item label="">
                <Radio.Group
                    onChange={this.orderChange.bind(this)} 
                    value={this.state.order}
                >
                    <Radio value={1}><FireOutlined/>综合排序</Radio>
                    <Radio value={2}><FieldTimeOutlined/>最新发布</Radio>
                    <Radio value={3}><CommentOutlined/>最多评论</Radio>
                    <Radio value={4}><BellOutlined/>最多订阅</Radio>
                </Radio.Group>
                </Form.Item>
            </Form>
                                  
            <List
                itemLayout="vertical"
                size="large"
                split="true"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={listData}

                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />

            </Layout>
        )
    }
}