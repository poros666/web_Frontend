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
const count = 4;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

const { Header, Footer, Sider, Content } = Layout;

class CommunnityShow extends Component {
    constructor(props){
        super(props)

        var sourceData = [
            {
            Uid:111,
            Pid:11,
            avatarSrc:'bear',
            title: '一文看懂前端和后端开发:从入门到放弃',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            },
            {
            Uid:112,
            Pid:12,
            avatarSrc:'pig',
            title: 'Linux网络数据转发平面的变迁-从内核协议栈到DPDK/XDP',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

            },
            {
            Uid:113,
            Pid:13,
            avatarSrc:'roo',
            title: '对于新技术栈落地和架构思维的建议',
            description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

            },
            // {
            // Uid:114,
            // Pid:15,
            // avatarSrc:'eeyore',
            // title: '一文看懂前端和后端开发:从入门到放弃',
            // description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            // },
            // {
            // Uid:116,
            // Pid:16,
            // avatarSrc:'boss',
            // title: '关于链表，你该了解这些！',
            // description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

            // },
            // {
            // Uid:115,
            // Pid:17,
            // avatarSrc:'strange',
            // title: '数据库的乐观锁和悲观锁并非真实的锁',
            // description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
            // },
        ];

        this.State={
            // initSwitching: true,
            // switching: false,
            data:sourceData
        }


    //     componentDidMount() {
    //         this.getData(res => {
    //             this.setState({
    //                 initLoading: false,
    //                 data: res.results,
    //                 list: res.results,
    //             });
    //         });
    //     }

    //     getData = callback => {
    //         reqwest({
    //             url: fakeDataUrl,
    //             type: 'json',
    //             method: 'get',
    //             contentType: 'application/json',
    //             success: res => {
    //                 callback(res);
    //             },
    //         });
    //     };

    //     onSwitch(){
    //         this.setState({
    //             loading: true,
    //             list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    //         });
    //         this.getData(res => {
    //             const data = this.state.data.concat(res.results);
    //             this.setState(
    //                 {
    //                 data,
    //                 list: data,
    //                 loading: false,
    //                 },
    //                 () => {
    //                 // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //                 // In real scene, you can using public method of react-virtualized:
    //                 // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //                 window.dispatchEvent(new Event('resize'));
    //                 },
    //             );
    //         });
    //       };
    }

    render() {
        // const { initSwitching, switching, list } = this.state;
        // const switchMore =
        //   !initSwitching && !switching ? (
        //     <div
        //       style={{
        //         textAlign: 'center',
        //         marginTop: 12,
        //         height: 32,
        //         lineHeight: '32px',
        //       }}
        //     >
        //       <Button onClick={this.onLoadMore}>switching more</Button>
        //     </div>
        //   ) : null;

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
                                    <Button type="primary" style={{float:'right',top:'15px'}}
                                    // onClick={this.onSwitch.bind(this)}
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
                    <Content style={{padding:'20px'}}>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.State.data}
                            renderItem={item => (
                            <List.Item
                                
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                            >

                                <List.Item.Meta
                                avatar={
                                    <a href={"#/ReadPost/"+item.Uid}>
                                      <Avatar src={require("../../img/avatar/"+item.avatarSrc+".jpg")}></Avatar>
                                    </a>
                                  }

                                //帖子的名字和指向的地址，传一个pid，post_id
                                title={<a href ={"#/ReadPost/"+item.Pid} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                                description={<p>{item.description}</p>}
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