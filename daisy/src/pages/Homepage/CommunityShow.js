import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Button, List, Avatar,Space, Row, Col } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import '../../style/homepage.css'

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const { Header, Footer, Sider, Content } = Layout;
 
const sourceData = [
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
        avatarSrc:'boss',
        name:'程序员小王',
        time:'2020-09-09',
        title: '快速学懂Lingo软件及其编程方法',
        description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    // {
    // Uid:115,
    // Pid:17,
    // avatarSrc:'strange',
    // title: '数据库的乐观锁和悲观锁并非真实的锁',
    // description:'Ant Design, a design language for '
    // },
];

function limitTxt(txt,count) {
    var str = txt;
    if(txt.length>count){
        str = str.substr(0,count) + '...' ;
    }
    return str;
}

class CommunityShow extends Component {
    constructor(props){
        super(props)

        this.state={
            initSwitching: true,
            switching: false,
            data:sourceData
        }
    }

    // componentDidMount() {
    //     this.getData(res => {
    //         this.setState({
    //             initSwitching: false,
    //             data: res.results,
    //             list: res.results,
    //         });
    //     });
    // }

    // getData = callback => {
    //     reqwest({
    //         url: fakeDataUrl,
    //         type: 'json',
    //         method: 'get',
    //         contentType: 'application/json',
    //         success: res => {
    //             callback(res);
    //         },
    //     });
    // };

    getRandom(n){
        var newList=[],id;
        var len=sourceData.length;
        for(var i=0;i<n;i++){
            // id=Math.floor(Math.random()*len);
            id = Math.ceil(Math.random()*len);
            if(newList.indexOf(sourceData[id]) === -1){
                newList.push(sourceData[id]);
            }
            else{
                i= i - 1;
                continue;
            }
        }
        return newList;
    }

    onSwitch() {
        let data1=this.getRandom(count)
        console.log(this.state.data);
        this.setState({
            switching: true,
            data:data1,
            // list: this.state.data.concat([...new Array(count)].map(() => ({ switching: true, name: {} }))),
            // list: this.state.list.splice(0,3,data1),
        });
        // console.log( this.state.data[2]);
        // this.getData(res => {
        //     const data = this.state.data.concat(res.results);
        //     this.setState(
        //     {
        //         data,
        //         list: data,
        //         switching: false,
        //         },
        //         () => {        
        //         //重置窗口的offsetTop以便显示地板下的虚拟化演示。
        //         //在实际场景中，您可以使用react-virtualized的公共方法：
        //         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        //         window.dispatchEvent(new Event('resize'));
        //         },
        //     );
        // });
    }

    render() {
        const { initSwitching, switching, list } = this.state
        const switchMore =!initSwitching && !switching
            // !initSwitching && !switching ? (
            //     <div>
            //     </div>
            // ) : null;

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
                    <Content style={{paddingLeft:'30px',paddingRight:'30px'}}>
                        <List
                            // bordered={true}
                            switching={initSwitching}
                            switchMore={switchMore}
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={item => (
                            <List.Item
                                // actions={[
                                //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                //     ]}
                            >

                                <List.Item.Meta

                                //帖子的名字和指向的地址，传一个pid，post_id
                                title={<a href ={"#/Moment/"+item.Pid} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                                // description={<p>{item.description}</p>}
                                description={
                                    <div>
                                        <Row>
                                            <Col span={3} offset={0}>
                                                {item.name}
                                            </Col>
                                            <Col span={1} offset={3}>
                                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />
                                            </Col>
                                            <Col span={1} offset={1}>
                                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />
                                            </Col>
                                            <Col span={1} offset={1}>
                                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
                                            </Col>
                                            <Col span={3} offset={2}>
                                                {item.time}
                                            </Col>
                                        </Row>
                                    </div>
                                }
                                avatar={
                                    <a href={"#/ReadPost/"+item.Uid}>
                                      <Avatar src={require("../../img/avatar/"+item.avatarSrc+".jpg")}></Avatar>
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
 
export default CommunityShow;