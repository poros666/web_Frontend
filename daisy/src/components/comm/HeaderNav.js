import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Space,Divider, Button} from 'antd'
import { LayoutOutlined,CommentOutlined, HomeOutlined, UserOutlined, RadarChartOutlined,LogoutOutlined, LoginOutlined} from '@ant-design/icons'
import logo from './logo-re.png'
import { isLogined,clearToken } from '../../utils/auth';
import LogoutHeaderNav from './LogoutHeaderNav';

const { SubMenu } = Menu;
const { Search } = Input;
// var islog;
class HeaderNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
        //   isLogin: false,
          islog:false,
        };

        // 这个绑定是必要的，使`this`在回调中起作用
        this.logoutClick = this.logoutClick.bind(this);
    }

    logoutClick(){
        clearToken()
        setTimeout(()=>{ 
            this.setState({
                islog:false,
            })
        })
    }
    searchJump(value){
        console.log(value)
        console.log(value.length)
        var w=window.open('about:blank')
        if(value.length === 0){
            w.location.href="#/search"
        }
        else{
            w.location.href="#/searchResult"
        }
    }
    
    render() {
        this.state.islog=isLogined()
        // console.log(islog)
        return (
            this.state.islog?
            <div >
                <Layout>
                    <Space size={20}  style={{ position: 'fixed', zIndex: 1, width: '100%', background:'white'}}>
                        <div className="logo" style={{margin:'0,100px',position:'relative',left:'50%'}}>
                            <a href="#/home" target="_blank" rel="noopener noreferrer">
                                <img 
                                    height={'40px'}
                                    src={logo} 
                                    alt="logo"
                                />
                            </a>
                        </div>
                        {/* <div style={{position:'relative',}}>
                            <Button onClick={this.handleClick} style={{width:'60px'}}>
                                {this.state.isLogin ? 'OFF':'IN' }
                            </Button>
                        </div> */}
                        <div style={{position:'relative',width:'100%',left:'20%'}}>
                            <Menu 
                            // style={{width:'100%'}}
                            // onClick={this.handleClick} 
                            // selectedKeys={[current]}
                             mode="horizontal" 
                            >
                                <Menu.Item key="home" icon={<HomeOutlined />}>
                                    <a href="#/home" target="_blank" rel="noopener noreferrer">
                                        首页
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="compPage" icon={<RadarChartOutlined />}>
                                    <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                        比赛
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="community" icon={<LayoutOutlined />}>
                                    <a href="#/community" target="_blank" rel="noopener noreferrer">
                                        社区
                                    </a>
                                </Menu.Item>

                                <Menu.Item>
                                <Search 
                                    placeholder="请输入想要搜索的内容"
                                    // onChange={this.inputChange.bind(this)}
                                    onSearch={value => this.searchJump(value)}
                                    style={{ width: 400 }}
                                />
                                </Menu.Item>              
                                
                                <SubMenu icon={<UserOutlined />} 
                                key='personalMenu'
                                title={"我的"}>
                                    
                                    <Menu.Item key="userHome">
                                        <a href="#/personal" target="_blank" rel="noopener noreferrer">
                                            个人主页
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="userTeam">
                                        <a href="#/personal/team" target="_blank" rel="noopener noreferrer">
                                            我的队伍
                                        </a>
                                        </Menu.Item>
                                    <Menu.Item key="userComp">
                                        <a href="#/personal/comp" target="_blank" rel="noopener noreferrer">
                                            我的比赛
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="userCollege">
                                        <a href="#/personal/colle" target="_blank" rel="noopener noreferrer">
                                            我的收藏
                                        </a>
                                    </Menu.Item>
                                </SubMenu>

                                <SubMenu icon={<CommentOutlined />} 
                                key='messageMenu'
                                // style={{ visibility: this.state.isVisibility,}}
                                title={"消息"}>
                                    <Menu.Item key="systemNotice">
                                        <a href="#/message/system" target="_blank" rel="noopener noreferrer">
                                            系统公告
                                        </a></Menu.Item>

                                    <Menu.Item key="compNotice">
                                        <a href="#/message/comp" target="_blank" rel="noopener noreferrer">
                                            比赛通知
                                        </a></Menu.Item>

                                    <Menu.Item key="replyNotice">
                                        <a href="#/message/reply" target="_blank" rel="noopener noreferrer">
                                            回复我的
                                        </a></Menu.Item>

                                    <Menu.Item key="letterNotice">
                                        <a href="#/message/letter" target="_blank" rel="noopener noreferrer">
                                            私信
                                        </a></Menu.Item>

                                    <Menu.Item key="teamNotice">
                                        <a href="#/message/team" target="_blank" rel="noopener noreferrer">
                                            队伍消息
                                        </a></Menu.Item>

                                    <Menu.Item key="applyNotice">
                                        <a href="#/message/apply" target="_blank" rel="noopener noreferrer">
                                            组队申请
                                        </a>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="signOut" icon={<LogoutOutlined />}
                                onClick={this.logoutClick}
                                >
                                        登出
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Space>
                </Layout>
                
                <Divider style={{ position: 'fixed', zIndex: 1, width: '100%', top:23 }}/>
                <Divider style={{ position: 'fixed', zIndex: 1, width: '100%', top:23 }}/>
                <Divider style={{ position: 'fixed', zIndex: 1, width: '100%', top:24 }}/>
            </div>
            :<LogoutHeaderNav/>
        )
    }
}

export default HeaderNav;
