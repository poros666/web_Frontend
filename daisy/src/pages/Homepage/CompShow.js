import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, List, Space, Row, Col, Button,Tag, Divider} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined,StarTwoTone,CalendarOutlined,TeamOutlined} from '@ant-design/icons';
import './compShow.css'
import CONSTURL from './config'
import Axios from 'axios';
import '../../style/homepage.css'
Axios.defaults.baseURL='/api'

const { Header, Footer, Sider, Content } = Layout;
const sourceData = [];
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
    sourceData.push({
        
    projectId: i+1,
    name:'第二届中国工业互联网大赛',
    startTime:
        '2020-08-16',
    endTime:
        '2020-09-24',
    host:
        '同济大学软件学院',
    participantsNumber:2,
    introduction:
        '转型，定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。大赛由工业和信息化部和浙江省人民政府联合主办。大赛由工业和信息化部和浙江省人民政府联合主办。定于2020年7月-12月举办第二届中国工业互联网大赛（以下简称“大赛”）。大赛由工业和信息化部和浙江省人民政府联合主办。',
    });
  };

class CompShow extends Component {
    constructor(props){
        super(props)
        this.state={
            // currentData:sourceData,
            currentData:[],
            isLoaded:false,
        }
        this.switchComp = this.switchComp.bind(this);
    }
    switchComp(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        Axios.get('/Project/Random')
        .then(function (response) {
          _this.setState({
            currentData:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })
    }

    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        Axios.get('/Project/Random')
        .then(function (response) {
          _this.setState({
            currentData:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })
    }
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
                                    <Button type="primary" style={{float:'right',top:'15px'}}
                                        onClick={this.switchComp}
                                    >换一换</Button>
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
                                dataSource={this.state.currentData}
                                renderItem={item => (
                                <div style={{background:'#f1f2f6',margin:'50px 20px',
                                                // *border:'0.5px #c8d6e5 solid'
                                        }}>
                                    <List.Item
                                        key={item.title}
                                        // actions={[]}
                                        extra={
                                            <div style={{width:'200px',height:'100%',margin:'0 auto',}}>
                                                
                                                <div style={{height:'20%',}}></div>
                                                <div style={{height:'25px',margin:'0 auto',}}>
                                                    <Tag icon={<CalendarOutlined />} color="success">开始时间：{item.startTime}</Tag>
                                                </div>
                                                <div style={{height:'50px',margin:'0 auto',}}>
                                                    <Tag icon={<CalendarOutlined />} color="success">结束时间：{item.endTime}</Tag>
                                                </div>
                                                {/* <div style={{height:'30%',}}></div> */}
                                                <div style={{margin:'0 auto',}}>
                                                    <Tag icon={<TeamOutlined />} color="warning">参与人数：{item.participantsNumber}</Tag>
                                                </div>
                                            </div>
                                        }
                                    >

                                    <List.Item.Meta
                                        title={
                                            <div style={{
                                                fontSize:20,
                                                textAlign: 'center',
                                            }}>
                                                <a href={"#/compPage/id="+item.projectId+"/"} 
                                                // id="compTitle" 
                                                target="_blank" rel="noopener noreferrer">{item.name}</a>
                                            </div>
                                        }
                                        description={
                                            <div>
                                                <div style={{textAlign:"center"}}>
                                                    <p>{item.host}</p>
                                                </div>
                                                <div style={{color:'#57606f'}}>
                                                    {item.introduction}
                                                    {/* {limitTxt(item.Introduction,200)} */}
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