import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, List, Space, Row, Col, Button,Tag, Divider} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined,StarTwoTone,CalendarOutlined} from '@ant-design/icons';
import './compShow.css'

const { Header, Footer, Sider, Content } = Layout;
const listData = [];
const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
);

function limitTxt(txt,count) {
    var str = txt;
    if(txt.length>count){
        str = str.substr(0,count) + '...' ;
    }
    return str;
};

for (let i = 0; i < 15; i++) {
    listData.push({
        
    ID: i+1,
    // title: `community part ${i+1}`,
    title:'第二届中国工业互联网大赛',
    startTime:
        '2020-08-16',
    endTime:
        '2020-09-24',
    host:
        '同济大学软件学院',
    content:
        '为深入实施工业互联网创新发展战略，持续提升工业互联网创新能力，支撑服务实体经济数字化转型，定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。大赛由工业和信息化部和浙江省人民政府联合主办。为深入实施工业互联网创新发展战略，持续提升工业互联网创新能力，支撑服务实体经济数字化转型，定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。大赛由工业和信息化部和浙江省人民政府联合主办。为深入实施工业互联网创新发展战略，持续提升工业互联网创新能力，支撑服务实体经济数字化转型，定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。大赛由工业和信息化部和浙江省人民政府联合主办。',
    });
  };

class CompShow extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ margin:'50px 150px' }}>
                <Layout>
                    <Header>
                        <Content>
                            <Row>
                                <Col span={2} offset={0}>
                                    <Button type="link">                    
                                        <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                            比赛</a>
                                    </Button>
                                </Col>
                                <Col span={2} offset={18}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>换一换</Button>
                                </Col>
                                <Col span={2} offset={0}>
                                    <Button type="primary" style={{float:'right',top:'15px'}}>
                                        <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                            更多</a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Header>

                    <Layout>
                        <Content>
                            {/* 从'List'开始调用 ant内容-List-竖排列表样式
                                根据需求进行修改 */}
                            <List
                                itemLayout="vertical"
                                size="large"
                                dataSource={listData}
                                renderItem={item => (
                                <div style={{background:'#f1f2f6',margin:'20px',
                                                // *border:'0.5px #c8d6e5 solid'
                                        }}>
                                    <List.Item
                                        key={item.title}
                                        // actions={[]}
                                        extra={
                                            <div style={{width:'100%',}}>
                                                <Tag icon={<CalendarOutlined />} color="success">开始时间：{item.startTime}</Tag>
                                                <br></br>
                                                <Tag icon={<CalendarOutlined />} color="success">结束时间：{item.endTime}</Tag>
                                                <br></br>
                                                <Button key="subscriptComp" icon={<StarTwoTone/>}>订阅</Button>
                                            </div>
                                        }
                                    >

                                    <List.Item.Meta
                                        title={
                                            <div style={{
                                                fontSize:20,
                                                textAlign: 'center',
                                            }}>
                                                <a href={"#/compPage/id="+item.ID+"/"} 
                                                // id="compTitle" 
                                                target="_blank" rel="noopener noreferrer">{item.title}</a>
                                            </div>
                                        }
                                        description={
                                            <div>
                                                <div style={{textAlign:"center"}}>
                                                    <p>{item.host}</p>
                                                </div>
                                                <div style={{color:'#57606f'}}>
                                                    {limitTxt(item.content,200)}
                                                </div>
                                            </div>
                                        }
                                    />
                                    
                                    </List.Item>
                                    </div>
                                )}
                            />
                        </Content>
                    </Layout>
                    <Footer>
                        <Content>
                            <Row>
                                <Col span={2} offset={22}>
                                    <Button type="link" style={{fontSize:20,float:'right'}}>
                                        <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                            更多比赛
                                            {/* >>> */}
                                            </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Footer>
                </Layout>
            </div>
         );
    }
}
 
export default CompShow;