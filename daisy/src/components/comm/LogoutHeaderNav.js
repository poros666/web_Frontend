import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Space,Divider, Button} from 'antd'
import { LayoutOutlined,CommentOutlined, HomeOutlined, UserOutlined, RadarChartOutlined,LogoutOutlined, LoginOutlined} from '@ant-design/icons'
import logo from './logo-re.png'
import { isLogined } from '../../utils/auth';

const { SubMenu } = Menu;
const { Search } = Input;
class LogoutHeaderNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginNum:1
        };
        // 这个绑定是必要的，使`this`在回调中起作用
        // this.loginClick = this.loginClick.bind(this);
    }
    loginClick(){
        window.open("#/login")
        // this.props.logoutClick(isLogined())
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
        return (
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
                        <div style={{position:'relative',width:'100%',left:'20%'}}>
                            <Menu 
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
                                
                                <Menu.Item  icon={<LogoutOutlined />}
                                     style={{ visibility: 'hidden'}}
                                >
                                        我的
                                </Menu.Item>
                                
                                <Menu.Item icon={<LogoutOutlined />}
                                     style={{ visibility: 'hidden'}}
                                >
                                        消息
                                </Menu.Item>
                                <Menu.Item key="signIn" icon={<LoginOutlined />}
                                    onClick={this.loginClick}
                                >
                                    {/* <a href="#/login" target="_blank" rel="noopener noreferrer"> */}
                                        登录
                                    {/* </a> */}
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

export default LogoutHeaderNav;
