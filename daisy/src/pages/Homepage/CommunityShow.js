import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Button, List, Avatar,Space, Row, Col } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
import '../../style/homepage.css'

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
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
                                        <a href="#/community" target="_blank" rel="noopener noreferrer">
                                            社区</a>
                                    </Button>
                                </Col>
                                <Col span={2} offset={16}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>换一换</Button>
                                </Col>
                                <Col span={2} offset={2}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>
                                        <a href="#/community" target="_blank" rel="noopener noreferrer">
                                            更多</a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Header>
                    <Content style={{padding:'20px'}}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item
                                
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                            >

                                <List.Item.Meta
                                title={item.title}
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                description=
                                "egisn44s2"
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