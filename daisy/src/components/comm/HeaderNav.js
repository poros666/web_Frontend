import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Space,Divider} from 'antd'
import { LayoutOutlined,SelectOutlined, CommentOutlined, HomeOutlined, UserOutlined, RadarChartOutlined, LoginOutlined} from '@ant-design/icons'
import logo from './logo-re.png'
// import logo from './logo2.png'
// import logo from './logo3.png'

const { Header} = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

class HeaderNav extends Component {

    constructor(props){
        super(props)
        this.state={
            inputSearch:'input search text'
        }
    }

    state = {
        current: 'mail',
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    searchJump(value){
        console.log(value)
        console.log(value.length)
        var w=window.open('about:blank')
        if(value.length == 0){
            w.location.href="#/search"
        }
        else{
            w.location.href="#/searchResult"
        }
    }   
    inputChange(e){
        this.setState({
            inputSearch: e.target.value
        })
    }

    keyDown(e){
        if(e.keyCode === 13){
        }
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <Layout>
                    <Space size={50}  style={{ position: 'fixed', zIndex: 1, width: '100%', background:'white'}}>
                        <div />
                        <div className="logo" style={{margin:'0,100px'}}>
                            <a href="#/home" target="_blank" rel="noopener noreferrer">
                                <img 
                                    height={'40px'}
                                    src={logo} 
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div /><div />
                        <div>
                            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" 
                            // style={{ height:'50px',top:'-40px'}} 
                            >
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                <a href="#/home" target="_blank" rel="noopener noreferrer">
                                    首页
                                </a>
                            </Menu.Item>
                            <Menu.Item key="compPage" icon={<RadarChartOutlined />}>
                                <a href="#/searchCompPage" target="_blank" rel="noopener noreferrer">
                                    比赛
                                </a>
                            </Menu.Item>
                            <Menu.Item key="community" icon={<LayoutOutlined />}>
                                <a href="#/community" target="_blank" rel="noopener noreferrer">
                                    社区
                                </a>
                            </Menu.Item>
                            
                        
                            <Search 
                                placeholder={this.state.inputSearch}
                                onChange={this.inputChange.bind(this)}
                                onSearch={value => this.searchJump(value)}
                                onKeyDown={e=>this.keyDown(e)}
                                style={{ width: 400 }}
                            />
                            

                            <SubMenu icon={<UserOutlined />} 
                            
                            title={"我的"}>
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
                                <Menu.Item key="userPost">
                                        我的发布
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu icon={<CommentOutlined />} 
                            title={"消息"
                            // <a href ={"#/message"}>{"消息"}</a>
                                }>
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
                                    </a></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="signOut" icon={<LoginOutlined />}>
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
        )
    }

}

export default HeaderNav;
