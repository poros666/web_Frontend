import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Button, List, Typography, Space } from 'antd';

const data = [
  '2020全国大学生计算机技能应用大赛',
  '2020年第二届华教杯全国大学生数学竞赛',
  '第四届全国农村创新创业项目创意大赛',
  '2020年第十四届iCAN国际创新创业大赛 ',
  '第九届中国创新创业大赛',
  '第八届中国大学生高分子材料创新创业大赛',
  '2020年全国高校创新英语挑战赛',
];

const { Header, Footer, Sider, Content } = Layout;

class CompShow extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{height: '400px',width:'400px',margin:'10px 10px',float:'right'}}>

                <Layout>
                    <Header>
                        <Content>
                            <Space>
                                <Button type="primary" style={{float:'right'}}>更多</Button>
                                <Button type="primary" style={{float:'right'}}>换一换</Button>
                            </Space>
                        </Content>
                    </Header>
                    <Content>
                        <List
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item style={{float:'left'}}>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
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