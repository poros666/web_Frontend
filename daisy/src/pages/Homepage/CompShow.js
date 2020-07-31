import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Button, List, Typography, Row, Col } from 'antd';

const data = [
  '2020全国大学生计算机技能应用大赛',
  '2020年第二届华教杯全国大学生数学竞赛',
  '第四届全国农村创新创业项目创意大赛',
  '2020年第十四届iCAN国际创新创业大赛 ',
//   '第九届中国创新创业大赛',
  '第八届中国大学生高分子材料创新创业大赛',
];

const { Header, Footer, Sider, Content } = Layout;

class CompShow extends Component {
    state = {  }
    render() { 
        return ( 
            // <div style={{height: '400px',width:'600px',margin:'10px 10px',float:'right'}}>
            <div style={{height: '400px',margin:'10px 10px'}}>

                <Layout>
                    <Header>
                        <Content>
                            <Row>
                                <Col span={2} offset={0}>
                                    <Button type="link">                    
                                        <a href="localhost:3000/#/compPage" target="_blank" rel="noopener noreferrer">
                                            比赛</a>
                                    </Button>
                                </Col>
                                <Col span={2} offset={16}>
                                    <Button type="primary" style={{float:'right'}}>换一换</Button>
                                </Col>
                                <Col span={2} offset={2}>
                                    <Button type="primary" style={{float:'right',margin:'0,auto'}}>
                                        <a href="localhost:3000/#/compPage" target="_blank" rel="noopener noreferrer">
                                            更多</a>
                                    </Button>
                                </Col>
                            </Row>
                        </Content>
                    </Header>
                    <Content>
                        <List 
                            itemLayout={'vertical'}
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item style={{float:'left'}}>
                                <Typography.Text mark>[新]</Typography.Text> {item}
                                </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </div>
         );
    }
}
 
export default CompShow;