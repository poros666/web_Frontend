import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, List,  Space,Menu} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';

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
    //   href: 'https://ant.design',
      title: `community part ${i}`,
    //   avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //   avatar: '..\..\public\communityPicture.jpg',
      description:
        '2020-08-16',
      content:
        '为深入实施工业互联网创新发展战略，持续提升工业互联网创新能力，支撑服务实体经济数字化转型，定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。大赛由工业和信息化部和浙江省人民政府联合主办。',
    });
  }

class CompShow extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ height: '5300px' , margin:'40px 150px' }}>
                <Layout>
                    <Layout>
                        <Header>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">比赛</Menu.Item>
                                {/* <Menu.Item key="3" style={{float:'right'}}>更多</Menu.Item> */}
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
                                        // src='compPicture.jpg'
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                    }
                                >
                                    <List.Item.Meta
                                    // avatar={<Avatar src={item.avatar} />}
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
                        <li>比赛排行榜</li>
                    </Sider>
                </Layout>
            </div>
         );
    }
}
 
export default CompShow;