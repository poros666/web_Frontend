import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Button, List, Avatar,Space, Row, Col } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import CONSTURL from './config'
import Axios from 'axios';
import '../../style/homepage.css'
Axios.defaults.baseURL='/api'

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const { Header, Footer, Sider, Content } = Layout;
 
// function limitTxt(txt,count) {
//     var str = txt;
//     if(txt.length>count){
//         str = str.substr(0,count) + '...' ;
//     }
//     return str;
// }

class CommunityShow extends Component {
    constructor(props){
        super(props)
        
        var sourceData = [
            {
            Uid:111,
            Pid:11,
            name:'程序员小昭',
            time:'2020-09-09',
            avatarSrc:'bear',
            title: '一文看懂前端和后端开发:从入门到放弃',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
            {
            Uid:112,
            Pid:12,
            name:'程序员小李',
            time:'2020-09-09',
            avatarSrc:'pig',
            title: 'Linux网络数据转发平面的变迁-从内核协议栈到DPDK/XDP',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
        
            },
            {
            Uid:113,
            Pid:13,
            name:'程序员小王',
            time:'2020-09-09',
            avatarSrc:'roo',
            title: '【数据结构与算法】详解什么是图结构，并用代码手动实现一个图结构',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
        
            },
            {
            Uid:114,
            Pid:15,
            avatarSrc:'eeyore',
            name:'程序员小宋',
            time:'2020-09-09',
            title: 'OpenCV-Python图像转换为PyQt图像的变形及花屏无法正常显示问题研究',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
            {
                Uid:116,
                Pid:16,
                avatarSrc:'roo',
                name:'程序员小王',
                time:'2020-09-09',
                title: '快速学懂Lingo软件及其编程方法',
                description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
        ];

        this.state={
            // data:sourceData,
            currentData:[],
            isLoaded:false,
        }
        
        // 这个绑定是必要的，使`this`在回调中起作用
        this.switchComm = this.switchComm.bind(this);
    }


    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        Axios.get('/Moment/Random')
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

    switchComm(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        Axios.get('/Moment/Random')
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
        if(!this.state.isLoaded){
            return <div>Loading</div>
        }
        else{
            // if(1){
        return ( 
            // <div style={{height: '400px',width:'600px',margin:'10px 10px',float:'right'}}>
            <div style={{height: '100%',margin:'10px'}}>
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
                                    <Button type="primary" style={{float:'right',top:'15px'}}
                                    onClick={this.switchComm.bind(this)}
                                    >换一换</Button>
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
                    <Content style={{paddingLeft:'30px',paddingRight:'30px'}}>
                        <List
                            // bordered={true}
                            itemLayout="horizontal"
                            dataSource={this.state.currentData}
                            renderItem={item => (
                            <List.Item
                                key={item.moment.momentId}
                            >
                                <List.Item.Meta
                                //帖子的名字和指向的地址，传一个pid，post_id
                                title={<a href ={"#/Moment/"+item.moment.momentId} target="_blank" rel="noopener noreferrer">{item.moment.title}</a>}
                                // description={<p>{item.description}</p>}
                                description={
                                    <div>
                                        <Row>
                                            <Col span={4} offset={0}>
                                                {item.nickname}
                                            </Col>
                                            <Col span={2} offset={10}>
                                                <IconText icon={StarOutlined}  text={item.starCount} key="list-vertical-star-o" />
                                            </Col>
                                            <Col span={2} offset={1}>
                                                <IconText icon={LikeOutlined} text={item.likeCount} key="list-vertical-like-o" />
                                            </Col>
                                            <Col span={2} offset={1}>
                                                <IconText icon={MessageOutlined} text={item.commentCount} key="list-vertical-message" />
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                avatar={
                                    <a href={"#/personal"}>
                                      <Avatar src={item.icon}></Avatar>
                                    </a>
                                  }

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
}
 
export default CommunityShow;