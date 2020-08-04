import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Button, List, Avatar, Row, Col } from 'antd';
import '../../style/homepage.css'
const data = [
    {
        title:  '一文看懂前端和后端开发:从入门到放弃',
    },
    {
        title: 'Linux网络数据转发平面的变迁-从内核协议栈到DPDK/XDP',
    },
    {
        title: '对于新技术栈落地和架构思维的建议',
    },
    {
        title: '一文看懂前端和后端开发:从入门到放弃',
    },
  
];

const { Header, Footer, Sider, Content } = Layout;

class CommunnityShow extends Component {
    state = {  }
    render() { 
        return ( 
            // <div style={{height: '400px',width:'600px',margin:'10px 10px',float:'right'}}>
            <div style={{height: '400px',margin:'10px 10px'}}>

                <Layout>
                    <Header theme='light'>
                        <Content>
                            <Row>
                                <Col span={2} offset={0}>
                                    <Button type="link">                    
                                        <a href="localhost:3000/#/community" target="_blank" rel="noopener noreferrer">
                                            社区</a>
                                    </Button>
                                </Col>
                                <Col span={2} offset={16}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>换一换</Button>
                                </Col>
                                <Col span={2} offset={2}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>
                                        <a href="localhost:3000/#/community" target="_blank" rel="noopener noreferrer">
                                            更多</a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Header>
                    <Content>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                // title={<a href="https://ant.design">{item.title}</a>}
                                title={item.title}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </div>
         );
    }
}
 
export default CommunnityShow;