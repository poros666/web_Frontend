import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Space,Divider, Button} from 'antd'
import { LayoutOutlined,CommentOutlined, HomeOutlined, UserOutlined, RadarChartOutlined,LogoutOutlined, SearchOutlined,LoginOutlined} from '@ant-design/icons'
import logo from './logo-re.png'
import { isLogined,clearToken } from '../../utils/auth';
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;
const { Search } = Input;
class LogoutHeaderNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // loginNum:1
        };
        // 这个绑定是必要的，使`this`在回调中起作用
        this.loginClick = this.loginClick.bind(this);
    }
    loginClick(){
        window.location.href='#/login'
        // window.open("#/login")
    }
    // searchJump(value){
    //     console.log(value)
    //     console.log(value.length)
    //     // var website=this.props.location.pathname
    //     console.log(this.props)
    //     var w=window.open('about:blank')
    //     if(value.length === 0){
    //         // window.open="#/search"
    //         w.location.href="#/search"
    //     }
    //     else{
    //         // var w=window.open('about:blank')
    //         w.location.href="#/searchResult/type=comp?"+String(value)
    //     }
    // }

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
                        <div style={{position:'relative',width:'100%',}}>
                            <Menu 
                            id='headerNav'
                            style={{position:'relative',width:'100%',left:'15%'}}
                             mode="horizontal" 
                            >
                                <Menu.Item key="home" icon={<HomeOutlined />}
                                style={{margin:'0 50px'}}
                                >
                                    <a href="#/home" target="_blank" rel="noopener noreferrer">
                                        首页
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="compPage" icon={<RadarChartOutlined />}
                                style={{margin:'0 50px'}}
                                >
                                    <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                        比赛
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="community" icon={<LayoutOutlined />}
                                style={{margin:'0 50px'}}
                                >
                                    <a href="#/community" target="_blank" rel="noopener noreferrer">
                                        社区
                                    </a>
                                </Menu.Item>

                                <Menu.Item  key="searchMenu" icon={<SearchOutlined />}
                                style={{margin:'0 50px'}}
                                >
                                    <a href="#/search" target="_blank" rel="noopener noreferrer">
                                        搜索
                                    </a>
                                {/* <Search 
                                    placeholder="请输入想要搜索的内容"
                                    // onChange={this.inputChange.bind(this)}
                                    onSearch={value => this.searchJump(value)}
                                    style={{ width: 400 }}
                                /> */}
                                </Menu.Item>                  
                                
                                <Menu.Item  icon={<LogoutOutlined />}
                                     style={{ visibility: 'hidden',margin:'0 50px'}}
                                >
                                        我的
                                </Menu.Item>
                                
                                <Menu.Item icon={<LogoutOutlined />}
                                     style={{ visibility: 'hidden',margin:'0 50px'}}
                                >
                                        消息
                                </Menu.Item>
                                <Menu.Item key="signIn" icon={<LoginOutlined />}
                                style={{left:'100px',float:'right'}}
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
