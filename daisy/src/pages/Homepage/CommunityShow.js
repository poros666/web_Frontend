import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, List, Avatar, Space, Button, Menu, Breadcrumb} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const listData = [];
const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
for (let i = 0; i < 25; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `community part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //   avatar: '..\..\public\communityPicture.jpg',
      description:
        '这里是社区内容的标题，这里是社区内容的标题',
      content:
        '这里是社区内容的正文，这里是社区内容的正文，这里是社区内容的正文，这里是社区内容的正文，这里是社区内容的正文，这里是社区内容的正文，这里是社区内容的正文',
    });
  }

class CommunityShow extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ height: '5500px' , margin:'40px 150px' }}>
                <Layout>
                    <Layout>
                        <Header>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">社区</Menu.Item>
                                <Menu.Item key="3" style={{float:'right'}}>更多</Menu.Item>
                                <Menu.Item key="2" style={{float:'right'}}>换一换</Menu.Item>
                            </Menu>
                            {/* <div  color='white'>
                                <Button type="text" style={{float:'right'}}>Text Button</Button>
                                <Button type="text" style={{float:'right'}}>Text Button</Button>
                            </div> */}

                        </Header>
                        <Content>
                            {/* 从'List'开始调用 ant内容-List-竖排列表样式
                                根据需求进行修改 */}
                            <List
                                itemLayout="vertical"
                                size="large"

                                //pagination 将展示区分页
                                // pagination={{
                                // onChange: page => {
                                //     console.log(page);
                                // },
                                // pageSize: 6,
                                // }}
                                
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
                                        // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        src='.\communityPicture.jpg'
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
                        </Content>
                        {/* <Footer>
                        </Footer> */}

                    </Layout>

                    <Sider>
                        <li>社区排行榜</li>
                    </Sider>
                </Layout>
            </div>
         );
    }
}
 
export default CommunityShow;